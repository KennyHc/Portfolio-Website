import React from 'react'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone,
  BsPhone,
  AiFillMail,
  IoMdMail,
} from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <AiFillPhone></AiFillPhone>
          <LinkTitle>Phone</LinkTitle>

          <LinkItem href="tel:778-814-9279">778-814-9279</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <AiFillMail />
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="khechen2018@gmail.com">
            khechen2018@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  )
}

export default Footer
