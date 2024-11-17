export class ProblemDetails {
    type?: string;
    title?: string;
    status?: number;
    detail?: string;
    traceId?: string;

    constructor(init?: Partial<ProblemDetails>) {
        Object.assign(this, init);
    }
}