import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'
import CardValueString from './CardValueString'
import CardValueStringNormal from './CardValueStringNormal'

const StyledEarnCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const EarnCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()

  return (
    <StyledEarnCard>
      <CardBody>
        <>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          {/* <Heading size="xl"> */}
            <CardValueStringNormal value="Earn up to" prefix="$" decimals="-" fontSize="20px"/>
            <CardValueString value="- % APR" prefix="$" decimals="-" fontSize="40px"/>
            <CardValueStringNormal value="in the Oil Refinery and Oil Tanks" prefix="$" decimals="-" fontSize="20px"/>
          {/* </Heading> */}
        </>
      </CardBody>
    </StyledEarnCard>
  )
}

export default EarnCard