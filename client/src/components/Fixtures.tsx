import { IFixtures } from '@/models/fixtures'
import ContainerCardFixtures from './ContainerCardFixtures'
import ContainerFixtures from './ContainerFixtures'

const Fixtures = ({ fixtures }: { fixtures: IFixtures[] }) => {
  return (
    <>
      <ContainerFixtures />
      <ContainerCardFixtures fixtures={fixtures} />
    </>
  )
}

export default Fixtures
