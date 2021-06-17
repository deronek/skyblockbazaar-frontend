import React from 'react'
import Skinview3d from 'react-skinview3d'

class SkinView extends React.Component {
    render() {
        if(!this.props.playerUuid) return null
        console.log("RENDERUJE SKINVIEW")
        return (
            <Skinview3d
            skinUrl={"https://crafatar.com/skins/" + this.props.playerUuid}
            height="500"
            width="300"
          />
        );
    }
}

export default SkinView