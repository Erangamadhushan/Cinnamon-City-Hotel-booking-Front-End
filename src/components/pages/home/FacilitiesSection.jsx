export default function FacilitiesSection() {
    return (
        <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h3 className="text-xl tracking-widest mb-8 text-zinc-400">
                    FACILITIES & SERVICES
                </h3>

                <ul className="grid grid-cols-2 gap-4 text-zinc-300 text-sm">
                    <li>• Panoramic mountain view</li>
                    <li>• Movie theater</li>
                    <li>• In-room fireplace</li>
                    <li>• Luxury minibar</li>
                    <li>• High-speed WiFi</li>
                    <li>• 24/7 concierge service</li>
                    <li>• Climate control</li>
                    <li>• Direct ski access</li>
                </ul>
            </div>

            <div>
                <img
                    src="feature-section.jpg"
                    alt="bathroom"
                    className="rounded-lg object-cover w-full h-[400px]"
                />
            </div>
        </section>
    );
}