import {IDynamicRoute} from "@/lib/models/routes/IDynamicRoute";

interface IRouteProps {
    id: string
}

export default async function Vocabulary(props: IDynamicRoute<IRouteProps>) {
    return (
        <div className={'h-screen w-screen text-center'}>
            <div className={'mt-10 mb-10 text-4xl font-bold'}>
                Vocabulary Name
            </div>
            <div className={'w-full'}>
                <input placeholder={'Note'}/>
            </div>
        </div>)
}
