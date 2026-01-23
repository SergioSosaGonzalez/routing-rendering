'use client';

export default function FilterErrorPage({ error }: { error: Error }) {
    return (<div id="error">
        <h2>An error ocurred!</h2>
        <p>Could not find any news for the specified filter.</p>
        <p>{error.message}</p>
    </div>);
}