import gjcLogo from './assets/logo.png'
import { DemoTeamMembers } from "@//components/team-members"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './components/mode-toggle'

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="flex flex-col items-center justify-center">
              <ModeToggle />
              <div className=''>
              <a href="http://gjclibrary.great-site.net/" target="_blank">
                <img src={gjcLogo} className="logo react" alt="GJC Library logo" />
              </a>
              </div>
              <div className='bottom-100 right-5'>
              <h1>This will be our HomePage for our GJC LIBRARY Project</h1>
              <p>
                Edit <code>frontend/src/App.tsx</code> for frontend devs
              </p>
              <p>
                Edit <code>htdocs/index.php</code> for backend devs
              </p>
              </div>
          </div>

        <div className='container mt-5 mb-5'>
          <DemoTeamMembers />
        </div>

      </ThemeProvider>
    </>
  )
}
export default App
