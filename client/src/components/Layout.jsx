import { ModeProvider } from '../context/modeProvider'
import MenuNav from './MenuNav'
import TopNav from './TopNav'
import KanBan from './KanBan'
import "../styles/layout.scss"

function Layout(){
    return(
        <ModeProvider>
            <main id="layout">
                <MenuNav />
                <TopNav />
                <KanBan />
            </main>
        </ModeProvider>
    )
}

export default Layout