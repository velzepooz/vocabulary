export declare const WordDto: {
    type: string;
    properties: {
        id: {
            type: string;
            minimum: number;
        };
        word: {
            type: string;
            minLength: number;
        };
        transcription: {
            type: string;
            minLength: number;
        };
        meaning: {
            type: string;
            minLength: number;
        };
        comment: {
            type: string;
            minLength: number;
        };
    };
};
