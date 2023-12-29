// import ButtonLogin from "@/components/button-login"
import FormLogin from "@/components/ui/form-login"
import { Button } from "@/components/ui/darkmode/button"
import { ModeToggle } from "./context/mode-toggle"



export default function Home() {
  return (
    <main className=' text-foreground flex flex-col m-2 gap-6 min-h-screen text-center justify-center space-y-6 py-8 md:py-12 lg:py-32'>
      <section className='flex justify-center items-center gap-1 '>
        <FormLogin />
        <Button >Login</Button>
        <ModeToggle/>
        {/* <Button>Login</Button> */}
        {/* <ButtonLogin name="Login"/>
        <ButtonLogin name="Dark"/> */}
      </section>
      <section id='products' >Produtos</section>
      <section id='localization'>Localização</section>
      <section id='contact'>contato</section>
    </main>
  )
}
