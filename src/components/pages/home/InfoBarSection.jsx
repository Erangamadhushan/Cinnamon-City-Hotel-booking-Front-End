export default function InfoBarSection() {
    return (
        <section className="border-t border-zinc-700 py-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-sm text-zinc-400 px-6">
                <span>Check in 3:00 PM</span>
                <span>Check out 11:00 AM</span>
                <span>Max guests 12</span>
            </div>
        </section>
    );
}