import {IDynamicRoute} from "@/lib/models/routes/IDynamicRoute";

interface IRouteProps {
    id: string
}

export default async function Vocabulary(props: IDynamicRoute<IRouteProps>) {
    return (
        <div className={'h-screen w-screen flex flex-col items-center'}>
            <div className={'mt-10 mb-10 text-4xl font-bold text-'}>
                Vocabulary Name
            </div>
            <div className={'min-w-[20%] min-h-[10%] max-w-prose'}>
                <input className={'w-full h-full border-2 border-[#8098F9]/50 rounded-[10px] bg-[#D9D9D9] flex justify-center'} placeholder={'Note'} type={'text'}/>
            </div>
                <div className={'w-[80%] h-fit text-center flex flex-col justify-center'}>
                    <div className={'flex'}>
                        <div>
                            #
                        </div>
                        <div className={'grow'}>
                            English
                        </div>
                        <div className={'grow'}>
                            Japanese
                        </div>
                    </div>

                    <div className={'flex'}>
                        <div>
                            1
                        </div>
                        <div className={'grow'}>
                            <input className={'w-full'} type={'text'} value={'Asd'}/>
                        </div>
                        <div className={'grow'}>
                            <input className={'w-full'} type={'text'} value={'Asd'}/>
                        </div>
                    </div>

                </div>
        </div>)
}
