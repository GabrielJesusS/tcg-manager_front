import { HTMLAttributes } from "react"
import { useForm } from "react-hook-form"
import { Footer } from "../components/common/Footer"
import { Textinput } from "../components/common/Textinput"

interface LoginProps extends HTMLAttributes<HTMLDivElement> {



}



const Login = ({}:LoginProps) => {

    const {} = useForm();



    return(
        <div className="h-screen flex flex-col">
            <section className="h-full bg-red-300">
                <div>

                </div>
                <div>
                    <form className="bg-system" action="">
                        <Textinput label="Nome de usuário" type="text" inputProps={{placeholder: "Nome de usuário"}}/>

                    </form>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default  Login