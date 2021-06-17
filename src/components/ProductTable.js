import React, { useState, useEffect } from 'react'
import MaterialTable from '@material-table/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


const ProductTable = ({ products }) => {
  const [data, setData] = useState([])

  const columns = [
    { title: "Name", field: "displayName" },
    { title: "Money per hour", field: "moneyPerHour", defaultSort: "desc" },
    { title: "Instant sell price", field: "instantSellPrice" },
    { title: "Expected sell price", field: "expectedSellPrice" },
  ]

  const theme = createMuiTheme({
    overrides: {
      MuiTableSortLabel: {
        root: {
          color: 'white',
          "&:hover": {
            color: '#E1E6FC',
          },
          '&$active': {
            color: '#C1CEFF',
          },
        },
        active: {},
        icon: {
          color: 'inherit !important'
        },
      },
      MuiTableCell: {
        body: {
          color: 'white'
        }
      }
    },
  })

  useEffect(() => {
    var p = Object.values(products)
    p.forEach(function (obj) {
      obj.displayName = productNames[obj.id]
      obj.instantSellPrice = +(obj.instantSellPrice).toFixed(2)
      obj.expectedSellPrice = +(obj.expectedSellPrice).toFixed(2)
      obj.moneyPerHour = +(obj.moneyPerHour).toFixed(2)
    })
    setData(p)
  }, [products])

  return (
    <MuiThemeProvider theme={theme}>
      <MaterialTable
        columns={columns.map((c) => ({ ...c, tableData: undefined }))}
        data={data}
        title="Product table"
        style=
        {{
          backgroundColor: '#22303c',
          color: '#FFFFFF'
        }}
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
    </MuiThemeProvider >
  )
}

export default ProductTable

const productNames = {
  'WHEAT': 'Wheat',
  'ENCHANTED_BREAD': 'Enchanted Bread',

  'CARROT': 'Carrot',
  'ENCHANTED_CARROT': 'Enchanted Carrot',

  'POTATO': 'Potato',
  'ENCHANTED_POTATO': 'Enchanted Potato',
  'ENCHANTED_BAKED_POTATO': "Enchanted Baked Potato",

  'PUMPKIN': "Pumpkin",
  'ENCHANTED_PUMPKIN': "Enchanted Pumpkin",

  'MELON': "Melon",
  'ENCHANTED_MELON': "Enchanted Melon",
  'ENCHANTED_GLISTERING_MELON': "Enchanted Glistering Melon",
  'ENCHANTED_MELON_BLOCK': "Enchanted Melon Block",

  'RED_MUSHROOM': "Red Mushroom",
  'ENCHANTED_RED_MUSHROOM': "Enchanted Red Mushroom",

  'BROWN_MUSHROOM': "Brown Mushroom",
  'ENCHANTED_BROWN_MUSHROOM': "Enchanted Brown Mushroom",

  'HUGE_MUSHROOM_1': "Red Mushroom Block",
  'ENCHANTED_HUGE_MUSHROOM_1': "Enchanted Red Mushroom Block",

  'HUGE_MUSHROOM_2': "Brown Mushroom Block",
  'ENCHANTED_HUGE_MUSHROOM_2': "Enchanted Brown Mushroom Block",

  'COCOA_BEANS': "Cocoa Beans",
  'ENCHANTED_COCOA_BEANS': "Enchanted Cocoa Beans",

  'CACTUS': "Cactus",
  'ENCHANTED_CACTUS_GREEN': "Enchanted Cactus Green",
  'ENCHANTED_CACTUS': "Enchanted Cactus",

  'SUGAR_CANE': "Sugar Cane",
  'ENCHANTED_SUGAR': "Enchanted Sugar",
  'ENCHANTED_PAPER': "Enchanted Paper",
  'ENCHANTED_SUGAR_CANE': "Enchanted Sugar Cane",

  'NETHER_WART': "Nether Wart",
  'ENCHANTED_NETHER_WART': "Enchanted Nether Wart",

  'RABBIT': "Rabbit",
  'ENCHANTED_RABBIT': "Enchanted Rabbit",

  'PORK': "Raw Porkchop",
  'ENCHANTED_PORK': "Enchanted Raw Porkchop",
  'ENCHANTED_GRILLED_PORK': "Enchanted Grilled Porkchop",

  'COAL': "Coal",
  'ENCHANTED_COAL': "Enchanted Coal",
  'ENCHANTED_COAL_BLOCK': "Enchanted Coal Block",

  'COBBLESTONE': "Cobblestone",
  'ENCHANTED_COBBLESTONE': "Enchanted Cobblestone",

  'IRON_INGOT': "Iron Ingot",
  'ENCHANTED_IRON': "Enchanted Iron",
  'ENCHANTED_IRON_BLOCK': "Enchanted Iron Block",

  'GOLD_INGOT': "Gold Ingot",
  'ENCHANTED_GOLD': "Enchanted Gold",
  'ENCHANTED_GOLD_BLOCK': "Enchanted Gold Block",

  'DIAMOND': "Diamond",
  'ENCHANTED_DIAMOND': "Enchanted Diamond",
  'ENCHANTED_DIAMOND_BLOCK': "Enchanted Diamond Block",

  'LAPIS_LAZULI': "Lapis Lazuli",
  'ENCHANTED_LAPIS_LAZULI': "Enchanted Lapis Lazuli",
  'ENCHANTED_LAPIS_LAZULI_BLOCK': "Enchanted Lapis Lazuli Block",

  'EMERALD': "Emerald",
  'ENCHANTED_EMERALD': "Enchanted Emerald",
  'ENCHANTED_EMERALD_BLOCK': "Enchanted Emerald Block",

  'REDSTONE': "Redstone Dust",
  'ENCHANTED_REDSTONE': "Enchanted Redstone",
  'ENCHANTED_REDSTONE_BLOCK': "Enchanted Redstone Block",

  'QUARTZ': "Quartz",
  'ENCHANTED_QUARTZ': "Enchanted Quartz",
  'ENCHANTED_QUARTZ_BLOCK': "Enchanted Quartz Block",

  'OBSIDIAN': "Obisidan",
  'ENCHANTED_OBSIDIAN': "Enchanted Obsidian",

  'GLOWSTONE_DUST': "Glowstone Dust",
  'ENCHANTED_GLOWSTONE_DUST': "Enchanted Glowstone Dust",
  'ENCHANTED_GLOWSTONE': "Enchanted Glowstone",

  'GRAVEL': "Gravel",
  'FLINT': "Flint",
  'ENCHANTED_FLINT': "Enchanted Flint",

  'ICE': "Ice",
  'PACKED_ICE': "Packed Ice",
  'ENCHANTED_ICE': "Enchanted Ice",
  'ENCHANTED_PACKED_ICE': "Enchanted Packed Ice",

  'END_STONE': "End Stone",
  'ENCHANTED_END_STONE': "Enchanted End Stone",

  'SNOWBALL': "Snowball",
  'SNOW_BLOCK': "Snow Block",
  'ENCHANTED_SNOW_BLOCK': "Enchanted Snow Block",

  'CLAY': "Clay",
  'ENCHANTED_CLAY': "Enchanted Clay",

  'SAND': "Sand",
  "ENCHANTED_SAND": "Enchanted Sand",

  'ROTTEN_FLESH': 'Rotten Flesh',
  'ENCHANTED_ROTTEN_FLESH': "Enchanted Rotten Flash",

  'BONE': "Bone",
  'ENCHANTED_BONE': "Enchanted Bone",

  'GUNPOWDER': "Gunpowder",
  'ENCHANTED_GUNPOWDER': "Enchanted Gunpowder",

  'BLAZE_ROD': "Blaze Rod",
  'ENCHANTED_BLAZE_POWDER': "Enchanted Blaze Powder",
  'ENCHANTED_BLAZE_ROD': "Enchanted Blaze Rod",

  'ENDER_PEARL': "Ender Pearl",
  'ENCHANTED_ENDER_PEARL': "Enchanted Ender Pearl",

  'GHAST_TEAR': "Ghast Tear",
  'ENCHANTED_GHAST_TEAR': "Enchanted Ghast Tear",

  'SLIMEBALL': "Slimeball",
  'ENCHANTED_SLIMEBALL': "Enchanted Slimeball",
  'ENCHANTED_SLIME_BLOCK': "Enchanted Slime Block",

  'MAGMA_CREAM': "Magma Cream",
  'ENCHANTED_MAGMA_CREAM': "Enchanted Magma Cream",

  'OAK_WOOD': "Oak Wood",
  'ENCHANTED_OAK_WOOD': "Enchanted Oak Wood",

  'SPRUCE_WOOD': "Spruce Wood",
  'ENCHANTED_SPRUCE_WOOD': "Enchanted Spruce Wood",

  'BIRCH_WOOD': "Birch Wood",
  'ENCHANTED_BIRCH_WOOD': "Enchanted Birch Wood",

  'DARK_OAK_WOOD': "Dark Oak Wood",
  'ENCHANTED_DARK_OAK_WOOD': "Enchanted Dark Oak Wood",

  'ACACIA_WOOD': "Acacia Wood",
  'ENCHANTED_ACACIA_WOOD': "Enchanted Acacia Wood",

  'JUNGLE_WOOD': "Jungle Wood",
  'ENCHANTED_JUNGLE_WOOD': "Enchanted Jungle Wood",
}