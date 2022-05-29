import React from 'react';
//import Button from '../Button/Button';
import { Button } from '../../lib/style/generalStyles';
//import './Section.scss';

import {
    Section as SectionWraper,
    SectionInner,
    SectionActionText,
    SectionHeading,
    SectionTitle,
}from "./SectionStyles";

const Section = ({
    isTestimonial,
    actionText,
    title,
    buttonText,
    isHeadingVisible = true,
    children,
    handleClick
}) => {
    return (
        <SectionWraper isTestimonial ={isTestimonial}>
            <SectionInner>
                {actionText &&<SectionActionText>{actionText}</SectionActionText>}
                {isHeadingVisible && (
                    <SectionHeading>
                        {title && <SectionTitle>{title}</SectionTitle>}
                        {buttonText && (
                            <Button isHeadingVisible isOutlined onClick={handleClick}>
                                {buttonText}
                            </Button>
                            )}
                    </SectionHeading>
                )}
                {children}    
            </SectionInner>
        </SectionWraper>
    );
};
/*     const modifierClasses = {
        testimonials: 'Section_testimonials'
    }
    let sectionClass = 'Section';
    
    if (modifiers){
        modifiers.map(modifier => {
            sectionClass += ' ' + modifierClasses[modifier];
        });
    }
    return (
        <section className={sectionClass}>
            <div className="Section-Inner">
                {actionText && <span className="Section-ActionText">{actionText}</span>}
                {isHeadingVisible && <div className="Section-Heading">
                    {title && <h2 className="Section-Title">{title}</h2>}
                    {buttonText && <Button modifiers={['heading', 'outline']} onClick ={handleClick}>
                    {buttonText}
                    </Button>}
                </div>}
                {children}
            </div>
        </section>
    );
} */



export default Section;