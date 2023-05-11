export declare const CreateWordDto: {
    type: string;
    properties: {
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
    required: string[];
};
