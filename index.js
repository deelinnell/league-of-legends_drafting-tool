const championPortraits = [
    'AatroxSquare.webp',
    'AhriSquare.webp',
    'AkaliSquare.webp',
    'AkshanSquare.webp',
    'AlistarSquare.webp',
    'AmumuSquare.webp',
    'AniviaSquare.webp',
    'AnnieSquare.webp',
    'ApheliosSquare.webp',
    'AsheSquare.webp',
    'Aurelion_SolSquare.webp',
    'AzirSquare.webp',
    'BardSquare.webp',
    'Bel%27VethSquare.webp',
    'BlitzcrankSquare.webp',
    'BrandSquare.webp',
    'BraumSquare.webp',
    'CaitlynSquare.webp',
    'CamilleSquare.webp',
    'CassiopeiaSquare.webp',
    'Cho%27GathSquare.webp',
    'CorkiSquare.webp',
    'DariusSquare.webp',
    'DianaSquare.webp',
    'Dr._MundoSquare.webp',
    'DravenSquare.webp',
    'EkkoSquare.webp',
    'EliseSquare.webp',
    'EvelynnSquare.webp',
    'EzrealSquare.webp',
    'FiddlesticksSquare.webp',
    'FioraSquare.webp',
    'FizzSquare.webp',
    'GalioSquare.webp',
    'GangplankSquare.webp',
    'GarenSquare.webp',
    'GnarSquare.webp',
    'GragasSquare.webp',
    'GravesSquare.webp',
    'GwenSquare.webp',
    'HecarimSquare.webp',
    'HeimerdingerSquare.webp',
    'IllaoiSquare.webp',
    'IreliaSquare.webp',
    'IvernSquare.webp',
    'JannaSquare.webp',
    'Jarvan_IVSquare.webp',
    'JaxSquare.webp',
    'JayceSquare.webp',
    'JhinSquare.webp',
    'JinxSquare.webp',
    'K%27SanteSquare.webp',
    'Kai%27SaSquare.webp',
    'KalistaSquare.webp',
    'KarmaSquare.webp',
    'KarthusSquare.webp',
    'KassadinSquare.webp',
    'KatarinaSquare.webp',
    'KayleSquare.webp',
    'KaynSquare.webp',
    'KennenSquare.webp',
    'Kha%27ZixSquare.webp',
    'KindredSquare.webp',
    'KledSquare.webp',
    'Kog%27MawSquare.webp',
    'LeBlancSquare.webp',
    'Lee_SinSquare.webp',
    'LeonaSquare.webp',
    'LilliaSquare.webp',
    'LissandraSquare.webp',
    'LucianSquare.webp',
    'LuluSquare.webp',
    'LuxSquare.webp',
    'MalphiteSquare.webp',
    'MalzaharSquare.webp',
    'MaokaiSquare.webp',
    'Master_YiSquare.webp',
    'MissFortuneSquare.webp',
    'MordekaiserSquare.webp',
    'MorganaSquare.webp',
    'NamiSquare.webp',
    'NasusSquare.webp',
    'NautilusSquare.webp',
    'NeekoSquare.webp',
    'NidaleeSquare.webp',
    'NilahSquare.webp',
    'NocturneSquare.webp',
    'Nunu_%26_WillumpSquare.webp',
    'OlafSquare.webp',
    'OriannaSquare.webp',
    'OrnnSquare.webp',
    'PantheonSquare.webp',
    'PoppySquare.webp',
    'PykeSquare.webp',
    'QiyanaSquare.webp',
    'QuinnSquare.webp',
    'RakanSquare.webp',
    'RammusSquare.webp',
    'Rek%27SaiSquare.webp',
    'Renata_GlascSquare.webp',
    'RenektonSquare.webp',
    'RengarSquare.webp',
    'RivenSquare.webp',
    'RumbleSquare.webp',
    'RyzeSquare.webp',
    'SejuaniSquare.webp',
    'SennaSquare.webp',
    'SettSquare.webp',
    'ShacoSquare.webp',
    'ShenSquare.webp',
    'ShyvanaSquare.webp',
    'SingedSquare.webp',
    'SionSquare.webp',
    'SivirSquare.webp',
    'SkaarlSquare.webp',
    'SkarnerSquare.webp',
    'SonaSquare.webp',
    'SorakaSquare.webp',
    'SwainSquare.webp',
    'SylasSquare.webp',
    'SyndraSquare.webp',
    'Tahm_KenchSquare.webp',
    'TaliyahSquare.webp',
    'TalonSquare.webp',
    'TaricSquare.webp',
    'TeemoSquare.webp',
    'ThreshSquare.webp',
    'TristanaSquare.webp',
    'TrundleSquare.webp',
    'TryndamereSquare.webp',
    'Twisted_FateSquare.webp',
    'TwitchSquare.webp',
    'UdyrSquare.webp',
    'UrgotSquare.webp',
    'VarusSquare.webp',
    'VayneSquare.webp',
    'VeigarSquare.webp',
    'Vel%27KozSquare.webp',
    'VexSquare.webp',
    'ViegoSquare.webp',
    'ViktorSquare.webp',
    'ViSquare.webp',
    'VladimirSquare.webp',
    'VolibearSquare.webp',
    'WarwickSquare.webp',
    'WukongSquare.webp',
    'XayahSquare.webp',
    'XerathSquare.webp',
    'Xin_ZhaoSquare.webp',
    'YasuoSquare.webp',
    'YorickSquare.webp',
    'YuumiSquare.webp',
    'ZacSquare.webp',
    'ZedSquare.webp',
    'ZeriSquare.webp',
    'ZiggsSquare.webp',
    'ZileanSquare.webp',
    'ZoeSquare.webp',
    'ZyraSquare.webp'
]

function makeChampionsArray(array) {
    const newArray = []
    array.forEach(file => {
        let obj = {}
        let name = getChampionName(file)
        obj.name = name
        obj.file = file
        newArray.push(obj)
    })
    return newArray
}

function getChampionName(file) {
    let length = file.length
    let name = file.slice(0, length - 11)
    let decoded = decode_utf8(name)
    let space = decoded.replace('_', ' ')
    return space
}

const championGrid = document.getElementById('champion-grid')

function displayChampionImages(array) {
    array.forEach(champ => {
        displayChampionImage(champ)
    })
}

function displayChampionImage(champ) {
    const div = document.createElement('div')
    div.classList.add('champion-square')
    div.onclick = (e) => console.log(e)

    let fixed = fixUTF(champ.file)
    let img = createChampionImage(fixed)
    div.appendChild(img)

    const p = document.createElement('p')
    p.innerHTML = champ.name
    div.appendChild(p)

    championGrid.appendChild(div)
}

function fixUTF(file) {
    let result = file.includes('%')
    if (result) {
        let newFile = file.replace('%', '%25')
        return newFile
    } else {
        return file
    }
}

function createChampionImage(file) {
    const div = document.createElement('div')
    div.classList.add('champion-portrait')
    div.style.backgroundImage = `url(images/${file})`
    return div
}

function decode_utf8(string) {
    return decodeURIComponent(string)
}


const championsArray = makeChampionsArray(championPortraits)
displayChampionImages(championsArray)

const button = document.getElementById('champs')
const searchBar = document.getElementById('search')

button.onclick = () => {
    console.log(championsArray)
}

searchBar.onkeyup = (e) => updateChampionImages(e)

function updateChampionImages(e) {
    championGrid.replaceChildren('')
    championsArray.forEach(champion => {
        let name = champion.name.toLowerCase()
        let value = e.target.value
        if (name.includes(value)) {
            displayChampionImage(champion)
        }
    })
}

async function main() {
    const status = document.getElementById('ban-status')
    const blueBans = document.querySelector('.blue-bans').querySelectorAll('.ban')
    const redBans = document.querySelector('.red-bans').querySelectorAll('.ban')

    status.innerHTML = 'BLUE BAN'

    function bans(number, bans) {

    }
}