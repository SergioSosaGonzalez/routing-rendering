export function GET(request: Request) {
    console.log("hello");
    return new Response('Hello');
}

export function POST() {
    return new Response('Hello');
}