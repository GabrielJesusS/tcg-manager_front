import { Textarea } from "@/presentation/components/common/Textarea"
import { Textinput } from "@/presentation/components/common/Textinput"
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout"



const NewDeck = ({})=>{



    return(
        <>
            <DefaultLayout>

                <main>
                    <h1>Novo artigo!</h1>
                    <section>
                        <form action="">
                            <Textinput placeholder="Titulo..." label="Titulo do artigo:" type="text"/>
                            <Textinput placeholder="Descrição..." label="Descrição do artigo:" type="text"/>
                            <Textarea className="h-auto " placeholder="Este artigo fala sobre..." label="Texto:"/>
                            

                        </form>
                    </section>
                </main>

            </DefaultLayout>
        </>
    )
}

export default NewDeck