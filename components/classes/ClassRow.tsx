'use client'

import React from 'react'
import { GroupClass, PanelContent } from 'types'

interface ClassRowProps {
    classes: GroupClass[]
}

const ClassRow: React.FC<ClassRowProps> = (props) => {
    console.log('***', props)

    return (
        <>
            <h1>Class Row</h1>
        </>
    )
}

export default ClassRow
