export default function Wrapper({children}) {
    return (
        <div className="relative isolate px-8 lg:px-8 mx-auto max-w-4xl py-32 lg:py-56">
            {children}
        </div>
    );
}
