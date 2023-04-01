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

const PICKORDER = [
    'ban_b0',
    'ban_r0',
    'ban_b1',
    'ban_r1',
    'ban_b2',
    'ban_r2',
    'pick_b0',
    'pick_r0',
    'pick_r1',
    'pick_b1',
    'pick_b2',
    'pick_r2',
    'ban_b3',
    'ban_r3',
    'ban_b4',
    'ban_r4',
    'pick_r3',
    'pick_b3',
    'pick_b4',
    'pick_r4',
]

const STATUS = [
    'BLUE BAN',
    'RED BAN',
    'BLUE BAN',
    'RED BAN',
    'BLUE BAN',
    'RED BAN',
    'BLUE PICK',
    'RED PICK',
    'BLUE PICK',
    'RED PICK',
    'BLUE PICK',
    'RED PICK',
    'BLUE BAN',
    'RED BAN',
    'BLUE BAN',
    'RED BAN',
    'BLUE PICK',
    'RED PICK',
    'BLUE PICK',
    'RED PICK',
]

let CURRENT = 0
let SELECTED = ''
const REMOVED = []

const statusText = document.getElementById('ban_status')
const confirmButton = document.getElementById('confirm')
const resetButton = document.getElementById('reset')
const backButton = document.getElementById('back')

function onClick() {
    document.onkeydown = (e) => e.key == 'Enter' ? confirmChampion() : null
    confirmButton.onclick = () => confirmChampion()
    backButton.onclick = () => backButtonActive()
    resetButton.onclick = () => resetButtonActive()
}

confirmButton.onclick = () => start()

function start() {
    let ACTIVE = document.getElementById(PICKORDER[CURRENT])

    confirmButton.lastElementChild.innerHTML = 'ENTER'
    document.getElementById('ban_status').innerHTML = STATUS[CURRENT]
    ACTIVE.classList.add('active')
    ACTIVE.closest('.ban_container').classList.add('active')
    displayChampionImages(championsArray)
    onClick()
}

function resetButtonActive() {
    PICKORDER.forEach(id => {
        document.getElementById(id).style.backgroundImage = 'none'
        document.getElementById(id).classList.remove('active')
    })
    const ban = document.querySelectorAll('.ban_container')
    for (let i = 0; i < ban.length; i++) {
        ban[i].classList.remove('active')
    }
    const pick = document.querySelectorAll('.champion-pick')
    for (let i = 0; i < pick.length; i++) {
        pick[i].classList.remove('active')
    }
    confirmButton.classList.remove('active')

    for (let i = 0; i < REMOVED.length; i++) {
        let champ = REMOVED.pop()
        championsArray.push(champ)
    }
    championsArray.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)

    SELECTED = ''
    CURRENT = 0
    start()
}

function backButtonActive() {
    let ACTIVE = document.getElementById(PICKORDER[CURRENT])

    if (CURRENT >= 0) {
        if (CURRENT == 0) {
            ACTIVE.style.backgroundImage = 'none'
            ACTIVE.closest('.ban_container').classList.remove('active')
            ACTIVE.classList.remove('active')
            confirmButton.lastElementChild.innerHTML = 'START'
            confirmButton.onclick = () => start()
            championGrid.replaceChildren()
            return
        }
        if (CURRENT == 20) {
            CURRENT -= 1
            ACTIVE = document.getElementById(PICKORDER[CURRENT])

            ACTIVE.style.backgroundImage = 'none'
            let added = REMOVED.pop()
            championsArray.push(added)
            championsArray.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
            displayChampionImages(championsArray)
            ACTIVE.closest('.champion-pick').classList.add('active')
            SELECTED = ''
            return
        }

        ACTIVE.style.backgroundImage = 'none'

        if (CURRENT < 6 || CURRENT > 11 && CURRENT < 16) {
            ACTIVE.closest('.ban_container').classList.remove('active')
            ACTIVE.classList.remove('active')
        } else {
            ACTIVE.closest('.champion-pick').classList.remove('active')
        }

        CURRENT -= 1
        ACTIVE = document.getElementById(PICKORDER[CURRENT])

        if (CURRENT < 6 || CURRENT > 11 && CURRENT < 16) {
            ACTIVE.closest('.ban_container').classList.add('active')
            ACTIVE.classList.add('active')
        } else {
            ACTIVE.closest('.champion-pick').classList.add('active')
        }

        statusText.innerHTML = STATUS[CURRENT]
        ACTIVE.style.backgroundImage = 'none'

        confirmButton.classList.remove('active')

        let added = REMOVED.pop()
        championsArray.push(added)
        championsArray.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
        displayChampionImages(championsArray)
        SELECTED = ''
    }
}

function confirmChampion() {
    let ACTIVE = document.getElementById(PICKORDER[CURRENT])

    if (CURRENT < 19) {
        if (SELECTED === '') return

        if (CURRENT < 6 || CURRENT > 11 && CURRENT < 16) {
            ACTIVE.closest('.ban_container').classList.remove('active')
            ACTIVE.classList.remove('active')
        } else {
            ACTIVE.closest('.champion-pick').classList.remove('active')
        }

        CURRENT += 1
        ACTIVE = document.getElementById(PICKORDER[CURRENT])

        statusText.innerHTML = STATUS[CURRENT]

        if (CURRENT < 6 || CURRENT > 11 && CURRENT < 16) {
            ACTIVE.closest('.ban_container').classList.add('active')
            ACTIVE.classList.add('active')
        } else {
            ACTIVE.closest('.champion-pick').classList.add('active')
        }

        confirmButton.classList.remove('active')

        let removed = championsArray.splice(SELECTED, 1).pop()
        REMOVED.push(removed)

        displayChampionImages(championsArray)
        document.getElementById('search').value = ''
        SELECTED = ''
    } else if (CURRENT === 19) {
        let removed = championsArray.splice(SELECTED, 1).pop()
        REMOVED.push(removed)
        ACTIVE.closest('.champion-pick').classList.remove('active')
        confirmButton.classList.remove('active')
        championGrid.replaceChildren()
        CURRENT += 1
        return
    }
}

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
    championGrid.replaceChildren()
    array.forEach((champ, index) => {
        displayChampionImage(champ, index)
    })
}

function displayChampionImage(champ, index) {
    const div = document.createElement('div')
    div.classList.add('champion-square')

    let fixed = fixUTF(champ.file)
    let img = createChampionImage(fixed)
    div.appendChild(img.div)
    div.onclick = () => {
        document.getElementById(PICKORDER[CURRENT]).style.backgroundImage = img.url
        confirmButton.classList.add('active')
        if (SELECTED !== '') championGrid.childNodes[SELECTED].classList.remove('active')
        championGrid.childNodes[index].classList.add('active')
        SELECTED = index
    }
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
    const url = `url(images/champions/${file})`
    div.classList.add('champion-portrait')
    div.style.backgroundImage = url
    return {
        div,
        url
    }
}

function decode_utf8(string) {
    return decodeURIComponent(string)
}

const championsArray = makeChampionsArray(championPortraits)
const searchBar = document.getElementById('search')

searchBar.onkeyup = (e) => updateChampionImages(e)

function updateChampionImages(e) {
    championGrid.replaceChildren()
    confirmButton.classList.remove('active')
    document.getElementById(PICKORDER[CURRENT]).style.backgroundImage = 'none'
    SELECTED = ''
    const filtered = []
    championsArray.forEach((champ) => {
        let name = champ.name.toLowerCase()
        let value = e.target.value.toLowerCase()
        if (name.includes(value)) {
            filtered.push(champ)
        }
    })
    filtered.forEach((champ, index) => {
        displayChampionImage(champ, index)
    })
}