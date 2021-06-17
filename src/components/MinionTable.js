import React, { useState, useEffect } from 'react'
import MaterialTable from '@material-table/core';

const MinionTable = ({ minions }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        var m = Object.values(minions)
        m.forEach(function (obj) {
            obj.displayName = minionNames[obj.id]
            obj.totalProductionPerHour = +(obj.totalProductionPerHour).toFixed(2)
        })
        setData(m)
    }, [minions])

    return (
        <div className="MinionTable">
            <MaterialTable
                style=
                {{
                    backgroundColor: '#22303c',
                    color: '#FFFFFF'
                }}
                columns={columns.map((c) => ({ ...c, tableData: undefined }))} 
                data={data}
                title="Minion table"
                options=
                {{
                    paging: false,
                    search: true,
                    pageSize: 12,
                    pageSizeOptions: [12],
                    cellStyle: {
                        backgroundColor: '#192734',
                        color: '#FFFFFF'
                    },
                    headerStyle: {
                        fontWeight: 'bold',
                        fontSize: 16,
                        backgroundColor: '#192734',
                        color: '#8889a6'
                    },
                    searchFieldStyle:
                    {
                        padding: 5,
                        backgroundColor: '#192734',
                        color: '#FFFFFF'
                    },
                }}
            />
        </div>
    )
}

export default MinionTable


const columns = [
    { title: "Name", field: "displayName" },
    { title: "Level", field: "level" },
    { title: "Fuel bonus", field: "fuelBonus" },
    { title: "Total production per hour", field: "totalProductionPerHour" },
    { title: "Base tick time", field: "baseTickTime" },
]

const minionNames = {
    'WHEAT': 'Wheat',
    'CARROT': 'Carrot',
    'POTATO': 'Potato',
    'PUMPKIN': 'Pumpkin',
    'MELON': 'Melon',
    'MUSHROOM': 'Mushroom',
    'COCOA': 'Cocoa Beans',
    'CACTUS': 'Cactus',
    'SUGAR_CANE': 'Sugar Cane',
    'COW': 'Cow',
    'PIG': 'Pig',
    'CHICKEN': 'Chicken',
    'SHEEP': 'Sheep',
    'RABBIT': 'Rabbit',
    'NETHER_WARTS': 'Nether Wart',
    'FISHING': 'Fishing',
    'FLOWER': 'Flower',

    'COAL': 'Coal',
    'COBBLESTONE': 'Cobblestone',
    'IRON': 'Iron',
    'GOLD': 'Gold',
    'DIAMOND': 'Diamond',
    'LAPIS': 'Lapis Lazuli',
    'EMERALD': 'Emerald',
    'REDSTONE': 'Redstone',
    'QUARTZ': 'Quartz',
    'OBSIDIAN': 'Obsidian',
    'GLOWSTONE': 'Glowstone',
    'GRAVEL': 'Gravel',
    'ICE': 'Ice',
    'SAND': 'Sand',
    'ENDER_STONE': 'End Stone',
    'SNOW': 'Snow',
    'CLAY': 'Clay',
    'MITHRIL': 'Mithril',

    'ZOMBIE': 'Zombie',
    'SKELETON': 'Skeleton',
    'CREEPER': 'Creeper',
    'SPIDER': 'Spider',
    'CAVESPIDER': 'Cave Spider',
    'BLAZE': 'Blaze',
    'MAGMA_CUBE': 'Magma Cube',
    'ENDERMAN': 'Enderman',
    'GHAST': 'Ghast',
    'SLIME': 'Slime',

    'REVENANT': 'Revenant',
    'TARANTULA': 'Tarantula',
    'VOIDLING': 'Voidling',

    'OAK': 'Oak',
    'SPRUCE': 'Spruce',
    'BIRCH': 'Birch',
    'DARK_OAK': 'Dark Oak',
    'ACACIA': 'Acacia',
    'JUNGLE': 'Jungle',
}