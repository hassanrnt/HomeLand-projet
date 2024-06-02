import React from 'react'
import Logo from'../assets/img/logo.svg';


function ForgetPassword() {
    return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img classNameName="mx-auto my-10 h-10 w-auto"
                src={Logo}
                alt="logo" />      
        </a>
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h1 className="mb-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Mot de passe oublié ?
            </h1>
            <p className="font-light text-gray-500 dark:text-gray-400">Ne vous inquiétez pas ! Il vous suffit de saisir votre adresse e-mail et nous vous enverrons un code pour réinitialiser votre mot de passe !</p>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre adresse e-mail</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="text@domain.com" required="" />
                </div>
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label for="terms" className="font-light text-gray-500 dark:text-gray-300">J'accepte les<a className="font-semibold text-indigo-600 hover:text-indigo-500" href="#"> termes et conditions</a></label>
                    </div>
                </div>
                <button type="submit" 
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                >Réinitialiser le mot de passe</button>
            </form>
        </div>
    </div>
    </section>
    )
}

export default ForgetPassword
