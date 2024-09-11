interface ICreateLinkDto {
	longUrl: string;
}

interface SuccessResponse {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	longUrl: string;
	shortUrl: string;
}

interface SuccessResult {
	shortUrl: string;
	error: null;
}

interface FailureResult {
	shortUrl: null;
	error: Error;
}

type FetchResult = SuccessResult | FailureResult;

// {
// 	"id": "7988ed21-7ccd-446d-a4de-e3a4c431c42d",
// 	"createdAt": "2024-09-10T18:22:02.439Z",
// 	"updatedAt": "2024-09-10T18:22:02.439Z",
// 	"longUrl": "http://lvh.me:3000",
// 	"shortUrl": "9weOy"
// }

export const post = async (
	createLinkDto: ICreateLinkDto
): Promise<FetchResult> => {
	try {
		const res = await fetch(`links.${import.meta.env.VITE_API_URL}`, {
			method: 'POST',
			body: JSON.stringify(createLinkDto),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (!res.ok) {
			const errMsg =
				`${res.status}`[0] === '4'
					? 'Niepoprawne dane wejściowe'
					: 'Błąd serwera';
			throw new Error(errMsg);
		}

		const { shortUrl } = (await res.json()) as SuccessResponse;

		return {
			shortUrl,
			error: null,
		};
	} catch (err) {
		const { message } = err as Error;
		const errMsg =
			err instanceof TypeError && message === 'Failed to fetch'
				? 'Serwer nie odpowiada. Przepraszamy :('
				: message;
		console.error('Error fetching data:', errMsg, err);
		return {
			error: new Error(errMsg),
			shortUrl: null,
		};
	}
};
