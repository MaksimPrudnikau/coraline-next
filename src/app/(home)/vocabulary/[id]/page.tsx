import {IDynamicRoute} from "@/lib/models/routes/IDynamicRoute";

interface IRouteProps {
    id: string
}

export default async function Vocabulary(props: IDynamicRoute<IRouteProps>) {
    return (
        <div className={'h-screen w-screen flex flex-col items-center'}>
            <div className={'mt-10 mb-10 text-4xl font-bold'}>
                Vocabulary Name
            </div>

            <div className="w-[50%] relative overflowclassNameto">
                <table className="w-full text-sm teclassNameft text-gray-500 dark:text-gray-400">
                    <thead className="text-md text-grayclassNameuppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            English
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Japanese
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-bclassName:bg-gray-800 dark:border-gray-700 text-center">
                            <td className="px-6 py-4">
                                1
                            </td>
                            <td>
                                <input
                                    className={'w-[80%] text-black border-2 border-[#8098F9]/50 bg-[#8098F9]/10 text-[#2D31A6]/20 focus:outline-none'}
                                    type={'text'}
                                    placeholder={'English'}
                                />
                            </td>
                            <td>
                                <input
                                    className={'w-[80%] text-black border-2 border-[#8098F9]/50 bg-[#8098F9]/10 text-[#2D31A6]/20 focus:outline-none'}
                                    type={'text'}
                                    placeholder={'Japanese'}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>)
}
