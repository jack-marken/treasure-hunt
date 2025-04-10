
export default function App() {
  return (
    <div className="min-h-screen flex justify-center bg-indigo-200">
        <div className="bg-indigo-600">hi</div>
        <div className="aspect-video max-w-sm inline-block bg-white">
            <div className="relative -left-10 aspect-square rounded-full w-12 bg-orange-500"></div>
            <div className="relative -right-10 aspect-square rounded-full w-24 bg-purple-500"></div>
            <div className="relative aspect-video m-6 p-6 w-auto sm:w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-lg">
                <div>
                    <div className="text-xl font-medium text-black">Big Text</div>
                    <p className="text-gray-500">Small paragraph text</p>
                </div>
            </div>
        </div>
    </div>
  );
}
