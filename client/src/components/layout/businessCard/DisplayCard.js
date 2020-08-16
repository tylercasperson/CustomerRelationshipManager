import React, { useState } from 'react';

import Introduction from './Introduction';
import Address from './Address';
import Notes from './Notes';
import ImportantToBusiness from './ImportantToBusiness';
import ContactsToUse from './ContactsToUse';
import Events from './Events';
import CustomerReports from './CustomerReports';

import SocialLinks from './SocialLinks';
import InternalLinks from './InternalLinks';

const DisplayCard = (props) => {
  const [showCard, setShowCard] = useState(<Introduction />);
  const [cardFooter, setCardFooter] = useState(false);

  const cardToDisplay = (buttonName) => {
    if (showCard.type.name === buttonName) {
      setShowCard(
        <Introduction
          businessName={props.businessName}
          introduction={props.introduction}
          tagLine={props.tagline}
          slogan={props.slogan}
        />
      );
    } else {
      switch (buttonName) {
        case 'Address':
          setShowCard(
            <Address
              businessName={props.businessName}
              address1={props.address1}
              address2={props.address2}
              city={props.city}
              state={props.state}
              zip={props.zip}
              country={props.country}
              contactInfo={props.contactInfo}
            />
          );
          break;
        case 'ImportantToBusiness':
          setShowCard(
            <ImportantToBusiness
              importantToBusiness={props.importantToBusiness}
            />
          );
          break;
        case 'Notes':
          setShowCard(<Notes notes={props.notes} />);
          break;
        case 'ContactsToUse':
          setShowCard(<ContactsToUse contactsToUse={props.contactsToUse} />);
          break;
        case 'Events':
          setShowCard(<Events />);
          break;
        case 'CustomerReports':
          setShowCard(<CustomerReports />);
          break;

        default:
          setShowCard(
            <Introduction
              businessName={props.businessName}
              introduction={props.introduction}
              tagLine={props.tagline}
              slogan={props.slogan}
            />
          );
          break;
      }
    }
  };

  return (
    <div className='block max-w-128 max-h-64 bg-white shadow-lg rounded-lg overflow-hidden'>
      {showCard}

      <InternalLinks
        home={() => cardToDisplay()}
        address={() => cardToDisplay('Address')}
        agreement={() => cardToDisplay('ImportantToBusiness')}
        notes={() => cardToDisplay('Notes')}
        contactsToUse={() => cardToDisplay('ContactsToUse')}
        events={() => cardToDisplay('Events')}
        reports={() => cardToDisplay('CustomerReports')}
        social={() =>
          cardFooter ? setCardFooter(false) : setCardFooter(<SocialLinks />)
        }
      />

      {cardFooter}
    </div>
  );
};

export default DisplayCard;
