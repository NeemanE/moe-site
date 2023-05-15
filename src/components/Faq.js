import Accordion from 'react-bootstrap/Accordion';
import React from 'react';


export default function Faq() {
    return (
        <section id="faq">
            <div>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How long does it take?</Accordion.Header>
                        <Accordion.Body>
                        You can start seeing results in your Credit in as little as 30 days, but on average our clients graduate our services in only 3 to 6 months before they reach their goals.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Do deleted items come back?</Accordion.Header>
                        <Accordion.Body>
                        Items cannot come back as long as the item is current or paid at the time of removal or if the collection is older than three years. This holds true except in very rare circumstances.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Is Credit Repair worth it?</Accordion.Header>
                        <Accordion.Body>
                        Contrary to what credit bureaus want you to believe, credit repair does work in most circumstances. But it only works if you are getting the best advice from an experienced professional. Anyone with a credit score below 720 can benefit long-term from the advice and information provided through credit education. However, there are limiting factors that will prevent us from helping you. Two main factors are: (1) your financial situation and/or (2) the time frame in which you need to reach your results. It is possible to remove anything from a credit report, even accurate items. For instance, if the creditor makes mistakes or does not adhere to the specific time frame, the negative item may be removed.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Is Credit Repair legal?</Accordion.Header>
                        <Accordion.Body>
                        Yes, credit repair is legal and our credit education and document processing services will help you to use the law in your favor. That law is called “The Fair Credit Reporting Act.” The FCRA gives you the right to dispute any item on your credit report. If that item cannot be verified within a reasonable time (usually 30 days) it must be removed. Studies have shown that 79% of all credit reports contain errors. This is nearly 8 out of 10 reports. Therefore most credit reports improve immediately. For items that disputed that are not errors, a creditor or furnisher is often unable to find the records or signed documents within the allotted time and the item gets removed. Sometimes the furnisher will say it has been verified by not offer proof. It is our job to prepare documents that challenge this and we are very skilled at that.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>What are you able to remove?</Accordion.Header>
                        <Accordion.Body>
                        Collections, Charge Offs, Repossessions, Late Payments, Foreclosures, Judgments, Tax Liens, Inquiries, Personal Data, Student Loans, Public Records, and MUCH MORE!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>What can I expect?</Accordion.Header>
                        <Accordion.Body>
                        We will guide you through the process from start to finish and prepare all your documents for you. We have a superb knowledge of credit scoring and experience working with creditors and credit bureaus. It may be difficult for an individual to communicate with creditors and bureaus without an in depth understanding of their techniques and regulations in place for credit reporting. We have spent a great deal of time learning the laws that will help remove negative items from credit reports.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </section>
    );
}