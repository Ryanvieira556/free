import * as C from './styles'
import BannerCommunity from '../../Img/communityImage.png'

export const Community = () =>{
return(
    <C.Container>
<C.ContainerContent>
    <C.ContainerImg>
        <C.CommunityImg src={BannerCommunity} />
    </C.ContainerImg>
</C.ContainerContent>

    </C.Container>
)
}