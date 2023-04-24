import React  from 'react'


import { SzafranProjekt, SzafranProjektNextJs, Portfolio2D, Portfolio3D, PortfolioChoose} from './WebdevProjects/WebdevProjectsComponents'
import { ShrineForPortfolio, JapaneseRender, MysteryForest, Castle, Ramiris, Ichigo, Rimuru, Mirio, Hayasaka, Shinon, PortfolioLight, Garfield, BodySculpting, UnusualShapes, JapaneseLamps, Keyboard} from './ModelProjects/ModelProjectsComponents'
import { GamingEditing, LoopedVideos, SimpleEditing, TiktokVideos, WebsiteVideos} from './VideoProjects/VideoProjectsComponents'
import { MapPreparation, MapStocktaking, TemporaryRoadDesign } from './BricscadProjects/BricscadProjectsComponents'
import { AddingParts, CreatingToggles, ReplacingParts, WorldCreation } from './UnityProjects/UnityProjectsComponents'


const ProjectLookForComponent = ({showInModal, projectName}) => {
  switch (projectName) {
    case 'SZAFRAN PROJEKT':
      return <SzafranProjekt showInModal={showInModal} />
    break;
    case 'SZAFRAN PROJEKT migration to NEXTJS':
      return <SzafranProjektNextJs showInModal={showInModal} />
    break;
    case 'Portfolio 2D':
      return <Portfolio2D showInModal={showInModal} />
    break;
    case 'Portfolio 3D':
      return <Portfolio3D showInModal={showInModal} />
    break;
    case 'Portfolio START':
      return <PortfolioChoose showInModal={showInModal} />
    break;
    case 'Shrine for portfolio':
      return <ShrineForPortfolio showInModal={showInModal} />
    break;
    case 'Water reflection render':
      return <JapaneseRender showInModal={showInModal} />
    break;
    case 'Mystery Forest':
      return <MysteryForest showInModal={showInModal} />
    break;
    case 'Land Sculpture':
      return <Castle showInModal={showInModal} />
    break;
    case 'Ramiris':
      return <Ramiris showInModal={showInModal} />
    break;
    case 'Ichigo':
      return <Ichigo showInModal={showInModal} />
    break;
    case 'Rimuru':
      return <Rimuru showInModal={showInModal} />
    break;
    case 'Mirio':
      return <Mirio showInModal={showInModal} />
    break;
    case 'Hayasaka':
      return <Hayasaka showInModal={showInModal} />
    break;
    case '[OLD 2019] Shinon':
      return <Shinon showInModal={showInModal} />
    break;
    case 'Portfolio props':
      return <PortfolioLight showInModal={showInModal} />
    break;
    case 'Garfield Themed Horror Map Assets':
      return <Garfield showInModal={showInModal} />
    break;
    case 'Body sculpting':
      return <BodySculpting showInModal={showInModal} />
    break;
    case 'Unusual shapes practice':
      return <UnusualShapes showInModal={showInModal} />
    break;
    case 'Japanese Lamps':
      return <JapaneseLamps showInModal={showInModal} />
    break;
    case 'My keyboard, mouse and mouse bungee':
      return <Keyboard showInModal={showInModal} />
    break;
    case 'Looped videos editing style':
      return <LoopedVideos showInModal={showInModal} />
    break;
    case 'Footage editing for websites':
      return <WebsiteVideos showInModal={showInModal} />
    break;
    case 'Tiktok style editing':
      return <TiktokVideos showInModal={showInModal} />
    break;
    case 'Simple editing':
      return <SimpleEditing showInModal={showInModal} />
    break;
    case 'Gaming video editing':
      return <GamingEditing showInModal={showInModal} />
    break;
    case 'Map preparation':
      return <MapPreparation showInModal={showInModal} />
    break;
    case 'Map stocktaking':
      return <MapStocktaking showInModal={showInModal} />
    break;
    case 'Temporary Road design':
      return <TemporaryRoadDesign showInModal={showInModal} />
    break;
    case 'Replacing work-heavy parts such as hair and clothing':
      return <ReplacingParts showInModal={showInModal} />
    break;
    case 'Adding new assets to the avatar':
      return <AddingParts showInModal={showInModal} />
    break;
    case 'World creation/upload':
      return <WorldCreation showInModal={showInModal} />
    break;
    case 'Creating toggles and emotes':
      return <CreatingToggles showInModal={showInModal} />
    break;
    default:
      break;
  }
}

const AllProjectsList = ({showInModal, projectName}) => {

  return (
    <div className='projectShow__box' >

        <ProjectLookForComponent showInModal={showInModal} projectName={projectName} />
        
    </div>
  )
}

export default AllProjectsList