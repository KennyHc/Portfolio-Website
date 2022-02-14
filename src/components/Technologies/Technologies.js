import React from 'react'
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiAws,
  DiNodejsSmall,
  DiGitBranch,
} from 'react-icons/di'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles'

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of different web development technologies. From
      Front-end to Back-end.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />

        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br /> React.js from personal projects and Vue.js
            from previous employment.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAws size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Internship experience with <br /> Amazon Web Services such as AWS
            Lambda, AWS Batch, AWS AppSync and AWS Gateway. As well as project
            experience with Express.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGitBranch size="3rem" />
        <ListContainer>
          <ListTitle>Development</ListTitle>
          <ListParagraph>
            Experience with <br /> Agile development using tools like Jira,
            Confluence and GitFlow.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
