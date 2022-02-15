
export default function Post() {

    return <div className="p-10 flex justify-center">
        <table className="border-separate border border-slate-400">
            <thead>
                <tr>
                    <th className="border border-slate-300">Song</th>
                    <th className="border border-slate-300">Artist</th>
                    <th className="border border-slate-300">Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-slate-300">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="border border-slate-300">Malcolm Lockyer</td>
                    <td className="border border-slate-300">1961</td>
                </tr>
                <tr>
                    <td className="border border-slate-300">Witchy Woman</td>
                    <td className="border border-slate-300">The Eagles</td>
                    <td className="border border-slate-300">1972</td>
                </tr>
                <tr>
                    <td className="border border-slate-300">Shining Star</td>
                    <td className="border border-slate-300">Earth, Wind, and Fire</td>
                    <td className="border border-slate-300">1975</td>
                </tr>
            </tbody>
        </table>
    </div>
}
