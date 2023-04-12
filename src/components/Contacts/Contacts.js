import React from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LinkItem, LinkList, LinkColumn } from './ContactsStyles';

const Contacts = () =>  (
<Section id="contacts"> 
  {/* <SectionDivider/><br/> */}
  <SectionTitle>My Contacts</SectionTitle>
  <SectionText>
Please do not hesistate to contact me for any question
  </SectionText>

<LinkList>
    <LinkColumn>
        <AiFillPhone size={"3rem"}/>
        <LinkItem href='tel:647-870-2870'>(647) 870-2870</LinkItem>
    </LinkColumn>
    <LinkColumn>
        <AiOutlineMail size={"3rem"}/>
        <LinkItem href='mailto:andreyfaigon@gmail.com'>andreyfaigon@gmail.com</LinkItem>
    </LinkColumn>

</LinkList>
</Section>
);

export default Contacts;
