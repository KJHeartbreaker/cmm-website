import { device } from '@/styles/Breakpoints'
import { ContentContainer } from '@/styles/Wrappers'
import styled from 'styled-components'
import { IconContainer } from '../cards/Card.styles'

export const TrainingContentContainer = styled(ContentContainer)`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto;
    gap: 40px;
    padding-bottom: inherit;
    border-bottom: 2px solid var(--blue-44);

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        border-bottom: unset;
    }

    @media ${device.md} {
        grid-template-rows: repeat(2, auto);
        grid-template-columns: repeat(2, 1fr);
        padding-top: 100px;
        padding-bottom: 100px;
    }
`

export const TrainingCopyBlock = styled.div`
    grid-row-start: 2;

    h4 {
        color: var(--blue-33);
        margin-bottom: 20px;
    }

    h5 {
        text-transform: uppercase;
        color: var(--orange);
        font-weight: 700;
    }

    a > button {
        margin-top: 40px;
    }

    @media ${device.md} {
        grid-row-start: 1;
        grid-column-start: 1;
    }
`

export const UpcomingTrainingBlock = styled.div`
    border: 2px solid var(--orange);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    grid-row-start: 2;
    padding: 40px 20px;
    grid-row-start: 4;

    @media ${device.xs} {
        display: grid;
        grid-template-columns: 60% 1fr;
    }

    @media ${device.md} {
        grid-row-start: 2;
        grid-column-start: 1;
        display: flex;
        justify-content: flex-start;
    }

    @media ${device.lg} {
        display: grid;
        grid-template-columns: 60% 1fr;
    }

    h2 {
        color: var(--orange);
        margin-bottom: 20px;
    }

    span {
        margin-left: 20px;
        font-weight: 700;

        &.red {
            color: var(--red);
        }

        &.yellow {
            color: var(--yellow);
        }
    }

    div.calendar-container {
        display: none;

        @media ${device.xs} {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 20px;
            width: 100%;
        }

        @media ${device.md} {
            display: none;
        }

        @media ${device.lg} {
            display: flex;
        }
    }
`

export const TrainingImageBlock = styled.div`
    grid-row-start: 1;

    @media ${device.md} {
        grid-column-start: 2;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
    }
`

export const TrainingTakeawayBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h2 {
        color: var(--orange);
    }

    div.takeaways {
        grid-row-start: 3;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    @media ${device.md} {
        grid-row-start: 2;
        grid-column-start: 2;
    }
`

export const TrainingTakeaway = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 20px;

    ${IconContainer} {
        margin-bottom: 20px;
    }
`
