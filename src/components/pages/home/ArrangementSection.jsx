export default function ArrangementSection() {
    return (
        <section className="py-16 px-6 max-w-6xl mx-auto">
            <h3 className="text-xl tracking-widest mb-10 text-zinc-400">
                SLEEPING ARRANGEMENTS
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-zinc-700 p-6">
                    <h4 className="text-lg mb-2">Bedroom Area</h4>
                    <p className="text-zinc-400 text-sm">
                        King-size bed · Designer lounge sofa
                    </p>
                </div>
                <div className="border border-zinc-700 p-6">
                    <h4 className="text-lg mb-2">Bathroom</h4>
                    <p className="text-zinc-400 text-sm">
                        Spa-inspired en-suite · Rain shower
                    </p>
                </div>
            </div>
        </section>
    );
}