import "./header.css"
import "../assets/style.css"

function Header() {
    return (
        <>        
          <header class="bg-container pt-4 lg:pt-6">
                <div class="max-w-screen-xl mx-auto px-4">
                    <div class="flex justify-between items-center">
                        <h3><a class="w-28 lg:w-auto" href="/">LeGuide</a></h3>
                        <div>                    
                            <a id="register" href="/sign" class="ml-4 lg:ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 lg:py-3 leading-tight lg:leading-none border border-primary rounded text-xs lg:text-sm font-roboto font-medium text-primary hover:bg-primary-light">
                            Essayer
                        </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;