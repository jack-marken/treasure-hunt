export default function Boxes() {
    return (
        <div className="min-h-screen w-full text-left bg-slate-200">
            <div className="flex flex-col pt-10 px-8 mx-3 justify-center">
                {/* <div className="text-md border-b-2 border-slate-300 py-4">
                    <p>🟥 = 0.5</p>
                    <p>🟧 = 50</p>
                    <p>🟨 = 21</p>
                    <p>🟩 = 24</p>
                    <p>🟦 = 12</p>
                    <p>🟪 = 4</p>
                </div> */}
                <div className="text-sm border-b-2 border-slate-300 py-4 mb-4">
                    <p>🟥 + 🟥 = Δ</p><br/>
                    <p>( 🟦 - 🟪 ) * 2 - 🟦 = Φ</p><br/>
                    <p>&radic; ( 🟩 + 🟦 ) + 🟪 * 🟥 = Ω</p><br/>
                    <p>🟩 / ( ( 🟦 + 🟨 ) + ( ( -🟥 ) * 🟧 ) ) = Π</p>
                </div>
                <div className="text-md">
                    <p>Answer (4 digits) = ΔΦΩΠ</p><br/>
                </div>
            </div>
        </div>
    );
}