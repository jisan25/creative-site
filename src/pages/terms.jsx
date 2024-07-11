import siteInfo from "@/db/siteInfo";
import { useEffect } from "react";

const TermsPage = () => {
  useEffect(() => {
    document.title =
      "Terms - " + siteInfo.site_name + " - " + siteInfo.site_title;
  }, []);

  return (
    <main id="main" style={{paddingTop:"100px"}}>
      <section className="inner-page terms pt-0">
        <div className="container-xl container-fluid">
          <h2 className="text-dark h2 font-bold mb-4">
            TERMS OF SERVICE (SAAS)
          </h2>
          <h6 className="h6">
            CREATIVE SOFTWARE AND/OR ITS AFFILIATES (“ <b>CREATIVE SOFTWARE</b>{" "}
            ”) IS WILLING TO GRANT ACCESS TO THE SAAS PRODUCTS TO YOU AS THE
            COMPANY OR THE LEGAL ENTITY THAT WILL BE UTILIZING THE SAAS PRODUCTS
            (REFERENCED BELOW AS “ <b>CUSTOMER</b> ”) ON THE CONDITION THAT YOU
            ACCEPT ALL OF THE TERMS OF THIS AGREEMENT (AS DEFINED BELOW). BY
            ENTERING INTO THIS AGREEMENT ON BEHALF OF AN ENTITY OR ORGANIZATION,
            YOU REPRESENT THAT YOU HAVE THE LEGAL AUTHORITY TO BIND THAT ENTITY
            OR ORGANIZATION TO THIS AGREEMENT. CUSTOMER AND CREATIVE SOFTWARE
            MAY EACH ALSO BE REFERRED TO AS A “PARTY” AND TOGETHER, THE
            “PARTIES”. PLEASE READ THIS AGREEMENT CAREFULLY BEFORE USING THE
            SAAS PRODUCTS. THIS SAAS TERMS OF SERVICE (“ <b>AGREEMENT</b> ”)
            CONSTITUTES A LEGAL AND ENFORCEABLE CONTRACT BETWEEN CUSTOMER AND
            CREATIVE SOFTWARE BY INDICATING CONSENT ELECTRONICALLY, OR ACCESSING
            OR OTHERWISE USING THE SAAS PRODUCTS, CUSTOMER AGREES TO THE TERMS
            AND CONDITIONS OF THIS AGREEMENT. IF CUSTOMER DOES NOT AGREE TO THIS
            AGREEMENT, DO NOT INDICATE CONSENT ELECTRONICALLY AND MAKE NO
            FURTHER USE OF THE SAAS PRODUCTS.
          </h6>
          <p>
            <b>1. Access and Use</b>
          </p>
          <p>
            <b>1.1. Access and Use.</b> Subject to payment of all applicable
            fees set forth in the Order or payment in accordance with an
            Indirect Order through a Channel Partner (as appropriate) and the
            terms and conditions of this Agreement, Creative Software grants
            Customer, during the Subscription Term, a non-exclusive,
            non-transferable right to access and use (and permit Authorized
            Users to access and use) the SaaS Products and applicable
            Documentation solely for
          </p>
          <p>
            <b>1.2. Access and Use Restrictions.</b> Customer shall not
            (directly or indirectly): (a) copy or reproduce the SaaS Products or
            the Documentation except as permitted under this Agreement; (b)
            exceed the subscribed quantities, users or other entitlement
            measures of the SaaS Products as set forth in the applicable Order;
            (c) remove or destroy any copyright, trademark or other proprietary
            marking or legends placed on or contained in the SaaS Products,
            Documentation or Creative Software Intellectual Property; (d)
            assign, sell, resell, sublicense, rent, lease, time-share,
            distribute or otherwise transfer the rights granted to Customer
            under this Agreement to any third party except as expressly set
            forth herein; (e) modify, reverse engineer or disassemble the SaaS
            Products; (f) except to the limited extent applicable laws
            specifically prohibit such restriction, decompile, attempt to derive
            the source code or underlying ideas or algorithms of any part of the
            SaaS Products, attempt to recreate the SaaS Products or use the SaaS
            Products for any competitive or benchmark purposes; (g) create,
            translate or otherwise prepare derivative works based upon the SaaS
            Products, Documentation or Creative Software Intellectual Property;
            (h) interfere with or disrupt the integrity or performance of the
            SaaS Products; (i) attempt to gain unauthorized access to the SaaS
            Products or its related systems or networks, or perform unauthorized
            penetrating testing on the SaaS Products; (j) use the SaaS Products
            in a manner that infringes on the Intellectual Property rights,
            publicity rights, or privacy rights of any third party, or to store
            or transfer defamatory, trade libellous or otherwise unlawful data;
            or (k) store in or process with the SaaS Products any personal data,
            credit card data, personal financial data or other such sensitive
            regulated data not required by the Documentation, or any Customer
            Data that is subject to the breach of any laws of the land. Fees for
            the SaaS Products are based on use of the SaaS Products in a manner
            consistent with the Documentation. If Customer uses the SaaS
            products in a manner that is outside or in violation of the
            Documentation, then Customer will cooperate with Creative Software
            to address any applicable burden on the SaaS Products or pay an
            additional mutually agreed upon fee.
          </p>
          <p>
            <b>1.4. Trial Services</b> If Customer is using a free trial, a
            proof of concept version of the SaaS Products, a beta version of the
            SaaS Products, or using the SaaS Products on any other
            free-of-charge basis as specified in an Order including any related
            support services to the extent provided by Creative Software in its
            sole discretion (collectively, “Trial Services”), Creative Software
            makes such Trial Services available to Customer until the earlier
            of: (i) the end of the free trial or proof of concept period or beta
            testing period as communicated by Creative Software or specified in
            an Order; (ii) the start date of any purchased version of such SaaS
            Products; or (iii) written notice of termination from Creative
            Software (“Trial Services Period”). Creative Software grants
            Customer, during the Trial Services Period, a non-exclusive,
            non-transferable right to access and use the Trial Services for
            Customer’s internal evaluation purposes in accordance with the
            Documentation and subject to the access and use restrictions set
            forth in this Agreement. Customer is authorized to use Trial
            Services only for evaluation and not for any business or productive
            purposes, unless otherwise authorized by Creative Software in
            writing. Any data Customer enters into the Trial Services.
          </p>
          <p>
            Configurations made to the Trial Services by or for Customer during
            the term of such Trial Services will be permanently lost unless
            Customer: (a) has purchased a subscription to the same SaaS Products
            as covered by the Trial Services; or (b) exports such data or
            configurations before the end of such free period. There is no
            guarantee that features, or functions of the Trial Services will be
            available, or if available will be the same, in the general release
            version of the SaaS Products, and Customer should review the SaaS
            Products features and functions before making a purchase. Creative
            Software will be under no obligation to provide Customer any
            maintenance or support services with respect to the Trial Services.
            Notwithstanding anything to the contrary, Creative Software provides
            the Trial Services “as is” and “as available” without any warranties
            or representations of any kind. To the extent permitted by law,
            Creative Software disclaims all implied warranties and
            representations, including, without limitation, any implied warranty
            of merchantability, fitness for a particular purpose and
            non-infringement. Customer assumes all risks and all costs
            associated with its use of the Trial Services. Customer’s sole and
            exclusive remedy in case of any dissatisfaction or Creative Software
            breach of the Agreement with respect to such Trial Services is
            termination of the Trial Services. Any obligations on behalf of
            Creative Software to indemnify, defend, or hold harmless under this
            Agreement are not applicable to Customers using Trial Services.
          </p>
          <p>
            <b>1.5. Third Party Materials.</b> The SaaS Products include
            Third-Party Materials, use of which is subject to their respective
            OSS Licenses as indicated in the Documentation. Creative Software
            warrants that the inclusion of such Third-Party Materials in the
            SaaS Products will not prevent Customer from exercising the license
            rights provided to Customer herein in respect of the SaaS Products
            or limit Customer’s ability to use the SaaS Products in accordance
            with the Documentation. Nothing herein shall derogate from mandatory
            rights Customer may have under any OSS Licenses, if any. Customer
            may obtain a copy of the source code for certain Third-Party
            Materials by following the instructions set forth in the
            Documentation.
          </p>
          <p>
            <b>1.6. Support.</b> As part of its provision of the SaaS Products,
            Creative Software shall make available technical support to Customer
            in accordance with Creative Software then applicable SaaS support
            terms. Upon notification from Creative SoftwareORT, Customer shall
            promptly update any Agents on Customer systems that interact with
            the SaaS Products. Customer acknowledges and agrees that its failure
            to timely install such an update may result in disruptions to or
            failures of the SaaS Products, security risks or suspension of
            Customer’s access to the SaaS Products, without any liability on the
            part of Creative Software to Customer.
          </p>
          <p>
            <b>1.7. Mobile Applications.</b> With regard to SaaS Products that
            require the use of mobile applications by an Authorized User,
            Customer shall ensure that all Authorized Users promptly download
            and install all available updates for the mobile applications.
            Customer further acknowledges and agrees that the SaaS Products may
            not properly operate should any Authorized User fail to do so, and
            that Creative Software is not liable for any damages caused by a
            failure to update mobile applications accordingly.
          </p>
          <p>
            <b>2. Payment and Taxes</b>
          </p>
          <p>
            <b>2.1. Payment Terms. </b> Customer shall pay all invoices within
            ten (10) days of date of invoice, without any deduction or set-off
            (except for any amount disputed promptly and in writing by Customer
            in good faith), and payment will be sent to the address specified by
            Creative Software. Any amounts arising in relation to this Agreement
            not paid when due will be subject to a late charge unpaid balance as
            allowed by law. Without prejudice to Customer’s rights set out
            elsewhere in this Agreement, all SaaS Products fees are
            non-refundable and payable in advance. Creative Software may invoice
            for purchases of SaaS Products upon delivery.
          </p>
          <p>
            <b>2.2. Taxes.</b> The fees and charges covered by this Agreement
            are exclusive of any Indirect Taxes imposed or levied, currently or
            in the future based on applicable legislation, on the SaaS Products.
            Unless otherwise agreed between the Parties, Customer will be liable
            for compliance with reporting and payment of such Indirect Taxes in
            its tax jurisdiction. Creative Software shall include the Indirect
            Taxes on its invoice to Customer and remit such Indirect Taxes
            collected to the relevant authority if required by applicable law.
            For the avoidance of doubt, Creative Software will be responsible
            for direct taxes imposed on Creative Software net income or gross
            receipts in its tax jurisdiction.
          </p>
          <p>
            <b>2.3. Indirect Orders.</b> If Customer places an Indirect Order,
            then Creative Software grants the rights described in this Agreement
            in consideration for and subject to: (a) Customer’s agreement to
            comply with the pricing and payment terms of the Indirect Order, to
            be separately agreed between Customer and the applicable Channel
            Partner; and (b) Customer’s agreement to comply with its obligations
            set forth in this Agreement (including the restrictions on use of
            the SaaS Products). Notwithstanding the foregoing, the final sales
            price or rate shall be freely and independently determined between
            the applicable Channel Partner and Customer. For the avoidance of
            doubt, in the case of such an Indirect Order, any indication in this
            Agreement of an agreement between Customer and Creative Software for
            the price payable by Customer for such Indirect Order shall be null
            and void and not form a binding part of this Agreement and the
            provisions of this Agreement related to payment terms, pricing
            and/or order procedures shall not apply.
          </p>
          <p>
            <b>3. Rights in Intellectual Property</b>
          </p>
          <p>
            <b>3.1. Intellectual Property.</b>
            Except for the rights granted in this Agreement, all rights, title,
            and interest in and to the SaaS Products, Documentation, and
            Creative Software Intellectual Property are hereby reserved by
            Creative Software, its Affiliates or licensors. Except as provided
            for herein, all rights, title, and interest in and to Customer
            Intellectual Property are hereby reserved by Customer, its
            Affiliates or licensors. Nothing in this Agreement shall transfer
            ownership of any Intellectual Property rights from one Party to the
            other.
          </p>
          <p>
            <b>3.2. Customer Data.</b>Customer owns all right, title and
            interest in all Customer Data. Nothing in this Agreement shall be
            construed to grant Creative Software any rights in Customer Data
            beyond those expressly provided herein. Customer grants Creative
            Software and its Affiliates the limited, non-exclusive, worldwide
            license to view and use the Customer Data solely for the purpose of
            providing the SaaS Products.
          </p>
          <p>
            <b>3.3. Usage Data and Suggestions. </b> Creative Software shall be
            permitted to collect and use the Usage Data for its reasonable
            business purposes and for Customer’s benefit. In the event Creative
            Software wishes to disclose the Usage Data or any part thereof to
            third parties (either during the Subscription Term or thereafter),
            such data shall be anonymized and/or presented in the aggregate so
            that it will not identify Customer or its Authorized Users. The
            foregoing shall not limit in any way Creative Software
            confidentiality obligations pursuant to section 4 below. To the
            extent that Customer provides Creative Software with Suggestions,
            such Suggestions shall be free from any confidentiality restrictions
            that might otherwise be imposed upon Creative Software pursuant to
            this Agreement, and may be implemented by Creative Software in its
            sole discretion. Customer acknowledges that any Creative Software
            products or materials incorporating any such Suggestions shall be
            the sole and exclusive property of Creative Software.
          </p>
          <p>
            <b>4. Confidentiality</b>
          </p>
          <p>
            <b>4.1. Confidential Information.</b> The Parties acknowledge that
            each may disclose certain valuable confidential and proprietary
            information to the other Party. The receiving Party may only use the
            disclosing Party’s Confidential Information to fulfill the purposes
            of this Agreement. The receiving Party will protect the disclosing
            Party’s Confidential Information by using at least the same degree
            of care as the receiving Party uses to protect its own Confidential
            Information of a like nature (but no less than a reasonable degree
            of care) to prevent the unauthorized use, dissemination, disclosure,
            or publication of such Confidential Information. Notwithstanding the
            foregoing, the receiving Party may disclose Confidential Information
            to its (and its Affiliates) employees, advisors, consultants, and
            agents on a need-to-know basis and provided that such party is bound
            by obligations of confidentiality substantially similar to those
            contained herein. This section 4 supersedes any and all prior or
            contemporaneous understandings and agreements, whether written or
            oral, between the Parties with respect to Confidential Information
            and is a complete and exclusive statement thereof. Additionally, the
            obligations set forth in section 5.3 and not this section 4 herein
            apply to Customer Data.
          </p>
          <p>
            <b>4.2. Exceptions.</b> Information will not be deemed Confidential
            Information if it: (i) is known to the receiving Party prior to
            receipt from the disclosing Party directly or indirectly from a
            source other than one having an obligation of confidentiality to the
            disclosing Party; (ii) becomes known (independently of disclosure by
            the disclosing Party) to the receiving Party directly or indirectly
            from a source other than one having an obligation of confidentiality
            to the disclosing Party; (iii) becomes publicly known or otherwise
            ceases to be secret or confidential, except through a breach of this
            Agreement by the receiving Party; or (iv) is independently developed
            by the receiving Party without use of or reliance upon the
            disclosing Party’s Confidential Information, and the receiving Party
            can provide evidence to that effect. The receiving Party may
            disclose Confidential Information pursuant to the requirements of a
            court, governmental agency or by operation of law but shall (to the
            extent permissible by law) limit such disclosure to only the
            information requested and give the disclosing Party prior written
            notice sufficient to permit the disclosing Party to contest such
            disclosure.
          </p>
          <p>
            <b>4.3. Advertising and Publicity.</b> Neither Party shall make or
            permit to be made any public announcement concerning the existence,
            subject matter or terms of this Agreement or relationship between
            the Parties without the prior written consent of the other Party
            except as expressly permitted in this section. Customer grants
            Creative Software and its Affiliates during the term of the
            Agreement the right to use Customer’s trade names, logos, and
            symbols (“Customer Marks”) in its public promotional materials and
            communications for the sole purpose of identifying Customer as a
            Creative Software customer. Creative Software shall not modify the
            Customer Marks, or display the Customer Marks any larger or more
            prominent on its promotional materials than the names, logos, or
            symbols of other Creative Software customers. The foregoing
            promotional materials and communications may be created, displayed,
            and reproduced without Customer’s review, provided that they are in
            compliance with this section and any Customer Marks usage guidelines
            provided by Customer to Creative Software in writing.
          </p>
          <p>
            <b>5. Security and Processing of Personal Data</b>
          </p>
          <p>
            <b>5.1. Customer Data Content.</b> As between Creative Software and
            Customer, Customer is solely responsible for: (i) the content,
            quality and accuracy of Customer Data as made available by Customer
            and by Authorized Users; (ii) providing notice to Authorized Users
            with regards to how Customer Data will be collected and used for the
            purpose of the SaaS Products; (iii) ensuring Customer has a valid
            legal basis for processing Customer Data and for sharing Customer
            Data with Creative Software (to the extent applicable); and (iv)
            ensuring that the Customer Data as made available by Customer
            complies with applicable laws and regulations including Applicable
            Data Protection Laws.
          </p>
          <p>
            <b>5.2. Data Protection Laws.</b> The Parties shall comply with
            their respective obligations under the Applicable Data Protection
            Laws. In particular, if Customer is established in USA or Bangladesh
            will, in connection with the SaaS Products, provide Creative
            Software with personal data relating to an individual located within
            the Bangladesh or USA, the Parties shall comply with the Data
            Processing and Privacy Policy, as published on our website, which in
            such case is hereby incorporated into this Agreement.
          </p>
          <p>
            <b>5.3. Security of Customer Data.</b> Creative Software shall: (i)
            ensure that is has in place appropriate administrative, physical and
            technical measures designed to protect the security and
            confidentiality of Customer Data against any accidental or illicit
            destruction, alteration or unauthorized access or disclosure to
            third parties; (ii) have measures in place designed to protect the
            security and confidentiality of Customer Data; and (iii) access and
            use the Customer Data solely to perform its obligations in
            accordance with the terms of this Agreement, and as otherwise
            expressly permitted in this Agreement. Creative Software shall not
            materially diminish its security controls with respect to Customer
            Data during a particular SaaS Products term.
          </p>
          <p>
            <b>6. Warranties</b>
          </p>
          <p>
            <b>6.1. Limited SaaS Products Warranty.</b> During the applicable
            Subscription Term, Creative Software warrants that: (a) the SaaS
            Products will perform in substantial conformity with the
            Documentation; and (b) Creative Software will use industry standard
            measures designed to detect viruses, worms, Trojan horses or other
            unintended malicious or destructive code in the SaaS Products. The
            foregoing warranties are void if the failure of the SaaS Products
            has resulted from negligence, error, or misuse of the SaaS Products
            (including use not in accordance with the Documentation) by
            Customer, the Authorized User or by anyone other than Creative
            Software. Customer shall be required to report any breach of
            warranty to Creative Software within a period of thirty (30) days of
            the date on which the incident giving rise to the claim occurred.
            Creative Software sole and exclusive liability, and Customer’s sole
            and exclusive remedy, for breach of these warranties will be for
            Creative Software, at its expense, to use reasonable commercial
            efforts to correct such nonconformity within thirty (30) days of the
            date that notice of the breach was provided; and, if Creative
            Software fails to correct the breach within such cure period,
            Customer may terminate the affected Order and, in such event,
            Creative Software shall provide Customer with a pro-rata refund of
            any unused pre-paid fees paid for the period following termination
            as calculated on a monthly basis for the affected SaaS Products.
            Without derogating from Creative Software obligations under this
            Agreement, Customer warrants that it shall take and maintain
            appropriate steps within its control to protect the confidentiality,
            integrity, and security of its Confidential Information and Customer
            Data, including: (i) operating the SaaS Products in accordance with
            the Documentation and applicable law and; and (ii) dedicating
            reasonably adequate personnel and resources to implement and
            maintain the security controls set forth in the Documentation.
            Customer will be responsible for the acts and omissions of its
            Authorized Users.
          </p>
          <p>
            <b>6.2. Compliance with Law.</b> Each Party shall comply with all
            applicable, laws and regulations in connection with the performance
            of its obligations and the exercise of its rights under this
            Agreement.
          </p>
          <p>
            <b>6.3. Disclaimer.</b> Any and all warranties, expressed,
            incorporated or implied, are limited to the extent and period
            mentioned in this Agreement. To the maximum extent allowed by
            applicable law, Creative Software disclaims (and disclaims on behalf
            of its licensors and/or contributors to any Third-Party Materials)
            all other warranties, conditions and other terms, whether express or
            implied or incorporated into this Agreement by statute, common law
            or otherwise, including the implied conditions and warranties of
            merchantability and fitness for a particular purpose. Creative
            Software will have no liability for delays, failures or losses
            attributable or related in any way to the use or implementation of
            third-party software or services not provided by Creative Software.
          </p>
          <p>
            <b>7. Indemnification</b>
          </p>
          <p>
            <b>7.1. Infringement Indemnity.</b> Creative Software shall defend
            and indemnify Customer and/or its Affiliates and their officers,
            directors and employees against all third-party claims, suits and
            proceedings resulting from the violation, misappropriation, or
            infringement of such third party’s patent, copyright, trademark or
            trade secret caused by Customer’s use of the SaaS Products in
            accordance with this Agreement and the Documentation, and all
            directly related losses, liabilities, damages, costs and expenses
            (including reasonable attorneys’ fees).
          </p>
          <p>
            <b>7.2. Customer Data and Use Indemnity.</b> Customer shall defend
            and indemnify Creative Software and/or its Affiliates and their
            officers, directors and employees against any third-party claims,
            suits and proceedings (including those brought by a government
            entity) resulting from: (i) an alleged infringement or violation by
            the Customer Data of such third-party’s patent, copyright,
            trademark, trade secret; or (ii) Creative Software use of the
            Customer Data, in accordance with the terms of this Agreement and
            (where applicable) with the terms of the DPA, violates applicable
            law; and all directly related losses, liabilities, damages, costs
            and expenses (including reasonable attorneys’ fees).
          </p>
          <p>
            <b>7.3. Process.</b> Each Party’s defense and indemnification
            obligations herein will become effective upon, and are subject to:
            (a) the indemnified Party’s prompt notification to the indemnifying
            Party of any claims in writing; and (b) the indemnified Party
            providing the indemnifying Party with full and complete control,
            authority and information for the defense of the claim, provided
            that the indemnifying Party will have no authority to enter into any
            settlement or admission of the indemnified Party’s wrongdoing on
            behalf of the indemnified Party without the indemnified Party’s
            prior written consent (not to be unreasonably withheld). At the
            indemnifying Party’s request, the indemnified Party shall reasonably
            cooperate with the indemnifying Party in defending or settling any
            claim.
          </p>
          <p>
            <b>7.4. Exclusions.</b> The above Creative Software obligations to
            defend and indemnify will not apply in the event that a claim arises
            from or relates to: (a) use of the SaaS Products not in accordance
            with the Documentation and this Agreement; (b) Customer’s use of the
            SaaS Products in violation of applicable laws; (c) any modification,
            alteration or conversion of the SaaS Products not created or
            approved in writing by Creative Software; (d) any combination or use
            of the SaaS Products with any computer, hardware, software, data or
            service not required by the Documentation; (e) Creative Software
            compliance with specifications, requirements or requests of
            Customer; or (f) Customer’s gross negligence or willful misconduct.
          </p>
          <p>
            <b>7.5. Remedies.</b> If the SaaS Products becomes, or Creative
            Software reasonably determines that the SaaS Products is likely to
            become, subject to a claim of infringement for which Creative
            SoftwareORT must indemnify Customer as described above, Creative
            Software may at its option and expense: (a) procure for Customer the
            right to continue to access and use the SaaS Products, (b) replace
            or modify the SaaS Products so that it becomes non-infringing
            without causing a material adverse effect on the functionality
            provided by the infringing SaaS Products, or (c) if neither of the
            foregoing options are available in a timely manner on commercially
            reasonable terms, terminate the affected Order and provide Customer
            with a pro-rata refund of any unused pre-paid fees paid for the
            period following termination as calculated on a monthly basis for
            the affected SaaS Product. This section states the sole liability of
            Creative Software and the exclusive remedy of Customer with respect
            to any indemnification claims arising out of or related to this
            Agreement.
          </p>
          <p>
            <b>8. Limitation of Liability</b>
          </p>
          <p>
            <b>8.1. Maximum Liability.</b> Except for liability caused by
            Creative Software intellectual property infringement indemnification
            obligations in section 7.1, Customer’s data infringement indemnity
            in section 7.2, and Customer’s payment obligations herein, in no
            event will either Party’s maximum aggregate liability arising out of
            or related to this Agreement, regardless of the cause of action and
            whether in contract, tort (including negligence), warranty,
            indemnity or any other legal theory, exceed the total amount paid or
            payable to Creative Software under this Agreement during the twelve
            (12) month period preceding the date of initial claim.
          </p>
          <p>
            <b>8.2. No Consequential Damages.</b>
            Neither Party will have any liability to the other Party for any
            loss of profits or revenues, loss of goodwill, or for any indirect,
            special, incidental, consequential or punitive damages arising out
            of, or in connection with this Agreement, however caused, whether in
            contract, tort (including negligence), warranty, indemnity or any
            other legal theory, and whether or not the Party has been advised of
            the possibility of such damages.
          </p>
          <p>
            <b>8.3. Construction.</b> This Agreement is not intended to and will
            not be construed as excluding or limiting any liability which cannot
            be limited or excluded by applicable law, including liability for
            (a) death or bodily injury caused by a Party’s negligence; or (b)
            gross negligence, willful misconduct, or fraud.
          </p>
          <p>
            <b>9. Assignment.</b> Neither Party may assign any of its rights or
            obligations under this Agreement without the other Party’s prior
            written consent, which will not be unreasonably withheld.
            Notwithstanding the foregoing, either Party may assign any and all
            of its rights and obligations under this Agreement to a successor in
            interest in the event of a merger or acquisition or to an Affiliate,
            upon written notice to the other Party.
          </p>
          <p>
            <b>10. Restricted Rights and Export Control</b>
          </p>
          <p>
            <b>10.1. Export Control.</b> The exportation of the SaaS Products
            and Documentation, and all related technology and information
            thereof are subject to U.S. laws and regulations pertaining to
            export controls and trade and economic sanctions, including the U.S.
            Export Administration Act, Export Administration Regulations, the
            Export Control Reform Act, and the Office of Foreign Assets
            Control’s sanctions programs, the laws of the Bangladesh, and the
            laws of any country or organization of nations within whose
            jurisdiction Customer (or its Authorized Users who may use or
            otherwise receive the SaaS Products as expressly authorized by this
            Agreement) operates or does business, as amended, and the rules and
            regulations promulgated from time to time thereunder. Specifically,
            Customer hereby undertakes not to export, re-export, access or grant
            access to the SaaS Products and all related technology, information,
            materials and any upgrades thereto to: (a) any Prohibited Persons;
            (b) any country to which such export, re-export or access from is
            restricted or prohibited per the foregoing applicable laws; or (c)
            otherwise in violation of any applicable export or import
            restrictions, laws or regulations. Customer also certifies that it
            is not a Prohibited Person nor owned, controlled by, or acting on
            behalf of a Prohibited Person.
          </p>
          <p>
            <b>11. Professional Services.</b> Customer may separately purchase
            from Creative Software professional services in relation to the SaaS
            Products as may be generally available by Creative Software to its
            customers, pursuant to Creative Software then applicable
            professional services terms.
          </p>
          <p>
            <b>12. Term and Termination</b>
          </p>
          <p>
            <b>12.1. Term.</b> This Agreement will be effective upon signature
            by both Parties and shall remain in force during the applicable
            Subscription Term of the SaaS Products unless or until terminated by
            either Party pursuant to this section.
          </p>
          <p>
            <b>12.2. Termination.</b> Either Party may terminate this Agreement
            immediately upon notice to the other Party if the other Party: (i)
            materially breaches this Agreement and fails to remedy such breach
            within thirty (30) days after receiving written notice of the breach
            from the other Party; or (ii) commences bankruptcy or dissolution
            proceedings, has a receiver appointed for a substantial part of its
            assets or ceases to operate in the ordinary course of business. In
            addition, a Party may terminate this Agreement, or an Order, in
            whole or in part, or cease provision of the SaaS Products if
            required to comply with applicable law or regulation, and such
            termination will not constitute a breach of this Agreement by the
            terminating Party. Creative Software reserves the right to suspend
            Customer’s access to the applicable SaaS Products upon 30 days’
            written notice to Customer if: (a) an invoice is more than sixty
            (60) days past due; or (b) if there is an uncured material breach of
            this Agreement. Creative Software will promptly reinstate Customer’s
            access and use of the SaaS Products/provision of the Professional
            Services once the issue has been resolved. Upon termination or
            expiration of the Agreement or an Order, (x) any accrued rights and
            obligations will survive; (y) all outstanding fees and other charges
            under the Agreement or Order (as applicable) will become immediately
            due and payable, and (z) Customer will have no further right to
            access or use the applicable SaaS Products or professional services.
            If Customer is converting its perpetual on-premise software licenses
            to a SaaS Product, the applicable previously licensed perpetual
            on-premise software licenses will be terminated, along with any
            associated maintenance services, in accordance with the terms of the
            applicable Order.
          </p>
          <p>
            <b>12.3. Effects of Termination/Expiration.</b> Upon termination or
            expiration of an applicable Subscription Term: (i) Customer will
            have no further right to access or use the SaaS Products; and (ii)
            each Party shall within thirty (30) days after written request
            return or destroy any tangible Confidential Information of the other
            Party within its possession or control that is not contained on the
            SaaS Products. Any Customer Data contained on the SaaS Products will
            be deleted within sixty (60) days of termination/expiration of
            Customer’s Subscription Term. Customer acknowledges that it is
            responsible for exporting any Customer Data to which Customer
            desires continued access after termination/expiration, and Creative
            Software shall have no liability for any failure of Customer to
            retrieve such Customer Data and no obligation to store or retain any
            such Customer Data after such sixty (60) day period. Following
            termination of the SaaS Products, Creative Software may immediately
            deactivate Customer’s account. Any accrued rights and obligations
            will survive termination.
          </p>
          <p>
            <b>13. Miscellaneous</b>
          </p>
          <p>
            <b>13.1. Independent Contractors.</b> Nothing in this Agreement will
            be construed to imply a joint venture, partnership or
            principal-agent relationship between Creative Software and Customer,
            and neither Party will have the right, power or authority to
            obligate or bind the other in any manner whatsoever.
          </p>
          <p>
            <b>13.2. Notices.</b> All Notices will be in writing and will be
            deemed to have been duly given: (a) when delivered by hand; (b)
            three (3) days after being sent by registered or certified mail,
            return receipt requested and postage prepaid; (c) one (1) day after
            deposit with a nationally recognized overnight delivery or express
            courier service; or (d) when provided via email when the sender has
            received a delivery/read receipt. Notices for Creative Software
            should be sent to the following addresses: (i) for physical Notices
            the address specified for Creative Software in section 13.4
            “Governing Law and Jurisdiction” and; (ii) for electronic Notices
            to: info@creativesoftware.com.bd
          </p>
          <p>
            <b>13.3. Force Majeure.</b> With the exception of Customer’s payment
            obligations herein, neither Party will be liable to the other Party
            for any delay or failure to perform which is due to fire, pandemic,
            virus, epidemic, travel advisories as to health, security and/or
            terrorism, flood, lockout, transportation delay, war, acts of God,
            governmental rule or order, strikes or other labor difficulties, or
            other causes beyond its reasonable control. However, in such event,
            both Parties will resume performance promptly after the cause of
            such delay or failure has been removed.
          </p>
          <p>
            <b>13.4. Governing Law and Jurisdiction.</b> Each Party agrees to
            the applicable governing laws of Bangladesh and the state of
            Delaware, USA without regard to choice or conflicts of law rules,
            and to the exclusive jurisdiction of the applicable courts below
            with respect to any dispute, claim, action, suit or proceeding
            (including non-contractual disputes or claims) arising out of or in
            connection with this Agreement, or its subject matter or formation.
            To the extent not prohibited by applicable law, each of the Parties
            hereby irrevocably waives any and all right to trial by jury in any
            legal proceeding arising out of or related to this Agreement.
          </p>
          <p>
            <b>13.5. Entire Agreement, Execution, and Modification.</b> This
            Agreement supersedes all prior agreements and representations
            between the Parties regarding the subject matter of this Agreement.
            The terms and conditions contained in any Order issued by Customer
            will be of no force or effect, even if the Order is accepted by
            Creative Software. Creative Software may make changes to these Terms
            of Service from time to time. If Creative Software makes a material
            change to any of the foregoing, Creative Software will inform
            Customer by e-mail to the e-mail address(es) noted on the Order (or
            subsequently designated by Customer in writing as a contact for
            notifications from Creative Software), or through a banner or other
            prominent notice within the SaaS Products, or through the Creative
            Software support platform. If Customer does not agree to the change,
            Customer must so notify Creative Software by e-mail to
            info@creativesoftware.com.bd within thirty (30) days after Creative
            Software notice. If Customer so notifies Creative Software, then
            Customer will remain governed by the most recent terms of service
            applicable to Customer until the end of the then-current year of the
            Subscription Term and the updated terms shall apply upon the
            commencement of the subsequent Subscription Term.
          </p>
          <p>
            <b></b> 13.6. Severability and Waiver. This Agreement shall be
            deemed severable, and the invalidity or unenforceability of any term
            or provision hereof shall not affect the validity or enforceability
            of this Agreement or of any other term or provision hereof. Should
            any term or provision of this Agreement be declared void or
            unenforceable by any court of competent jurisdiction, the Parties
            intend that a substitute provision will be added to this Agreement
            that, to the greatest extent possible, achieves the intended
            commercial result of the original provision. The failure of either
            Party to enforce any rights granted to it hereunder or to take
            action against the other Party in the event of any breach hereunder
            will not be deemed a waiver by that Party as to subsequent
            enforcement of rights or subsequent actions in the event of future
            breaches.
          </p>
          <p>
            <b>"Affiliate”</b> means a company controlling, controlled by, or
            under common control with a Party (an entity will be deemed to have
            control if it owns over 50% of another entity).
          </p>

          <p>
            <b>“Agents”</b> means Creative Software proprietary software,
            systems and locally-installed software agents and connectors that
            interact with the SaaS Products as may be provided by Creative
            Software in connection with the SaaS Products.
          </p>

          <p>
            <b>“Applicable Data Protection Laws”</b> means the Digital Security
            Act 2018 of Bangladesh, any applicable laws and regulations executed
            by the Digital Security Agency of Bangladesh, any Consumer Privacy
            Acts of Delaware, in each case as amended, consolidated, re-enacted
            or replaced from time to time and only if and insofar as they apply.
          </p>

          <p>
            <b>“Authorized Users”</b> means employees, agents, consultants,
            contractors, or vendors authorized by Customer to use the SaaS
            Products solely for the internal use of Customer and its Affiliates,
            subject to the terms and conditions of this Agreement.
          </p>

          <p>
            <b>“Channel Partner”</b> means a third-party business entity that
            Creative Software has appointed as an approved partner to as
            applicable, distribute, re-sell and support the SaaS Products.
          </p>

          <p>
            <b>“Confidential Information”</b> means all information provided by
            the disclosing Party to the receiving Party concerning the
            disclosing Party or its Affiliates’ business, products or services
            that is not generally known to the public, including information
            relating to customers, vendors, trade secrets, prices, products,
            services, computer programs and other intellectual property and any
            other information which a Party should reasonably understand to be
            considered Confidential Information whether or not such information
            is marked “Confidential” or contains such similar legend by the
            disclosing Party at the time of disclosure.
          </p>

          <p>
            <b>“Customer Data”</b> means all data and/or content uploaded to the
            SaaS Products by Customer (including where applicable Authorized
            Users), and in all data derived from it. For the avoidance of doubt,
            Customer Data does not include Usage Data.
          </p>

          <p>
            <b>“Documentation”</b> means the user guides, installation
            documents, and specifications for the SaaS Products that are made
            available from time to time by Creative Software in electronic or
            tangible form and found at Creative Software.io, including the
            documentation located therein under the ‘Security’ section for the
            relevant SaaS Products, but excluding any sales or marketing
            materials.
          </p>
          <p>
            <b>“Indirect Order”</b> means excise, sales, use, gross-turnover,
            value added, goods and services tax or other similar types of
            indirect taxes on turnover and/or revenues, duties, customs or
            tariffs (however designated, levied or based and whether foreign or
            domestic, federal, state or province).
          </p>

          <p>
            <b>“Indirect Taxes”</b> means excise, sales, use, gross-turnover,
            value added, goods and services tax or other similar types of
            indirect taxes on turnover and/or revenues, duties, customs or
            tariffs (however designated, levied or based and whether foreign or
            domestic, federal, state or province).
          </p>

          <p>
            <b>“Intellectual Property”</b> means a Party’s proprietary material,
            technology, or processes (excluding the SaaS Products and
            Documentation), including services, software tools, proprietary
            framework and methodology, hardware designs, algorithms, objects and
            documentation (both printed and electronic), network designs,
            know-how, trade secrets and any related intellectual property rights
            throughout the world (whether owned or licensed by a third party)
            and any derivatives, improvements, enhancements or extensions of
            such Intellectual Property conceived, reduced to practice, or
            developed.
          </p>

          <p>
            <b>“Notice”</b> means any notice or other communication required or
            permitted under this Agreement.
          </p>

          <p>
            <b>“Order”</b> means Creative Software quote accepted by Customer
            via Customer’s purchase order or other ordering document submitted
            to Creative Software (directly or indirectly through a Channel
            Partner) to order Creative Software SaaS Products, which references
            the SaaS Products, pricing, payment terms, quantities, expiration
            date and other applicable terms set forth in an applicable Creative
            Software quote or ordering document.
          </p>

          <p>
            <b>“OSS Licenses”</b> means the respective open-source licenses that
            the Third-Party Materials are subject to.
          </p>

          <p>
            <b>“SaaS Products”</b> means the software-as-a-service products
            specified in the Order as further described in the Documentation
            (including any updates and upgrades to the SaaS Products provided by
            Creative Software in its sole discretion, and any software, systems
            and locally-installed software agents and connectors that interact
            with the SaaS Products as may be provided by Creative Software in
            connection with the SaaS Products), provided that any free trial
            saas software, proof of concept of the SaaS Products, beta version
            of the SaaS Products, or any other free-of-charge software product
            (“Trial Version”) will not be subject to this Agreement and instead
            will be governed by the applicable terms of service embedded in, or
            provided with, such Trial Version.
          </p>

          <p>
            <b>“Subscription Term”</b> means the period of time during which
            Customer is subscribed to the SaaS Products, as specified in an
            Order and which shall begin upon delivery of the SaaS Products.
          </p>

          <p>
            <b>“Suggestions”</b> means, any ideas or suggestions for
            improvements, new features, functionalities, corrections,
            enhancements, or changes to the SaaS Products suggested by Customer
            to Creative Software.
          </p>

          <p>
            <b>“Third-Party Materials”</b> means open-source software programs
            that are made available by third parties under their respective OSS
            Licenses.
          </p>

          <p>
            <b>“Usage Data”</b> means data generated in connection with
            Customer’s access, use and configuration of the SaaS Products and
            data derived from it (e.g., types of applications or accounts
            utilized or interacting with the SaaS Products).
          </p>

          <p>
            Any words following the terms including or include shall be regarded
            as examples only and not construed as an exhaustive list.
          </p>

          <p>
            Should Customer have any questions concerning this Agreement, or if
            Customer desires to contact Creative Software for any reason, please
            e-mail us at:
          </p>
          <p style={{ color: "#288ea5" }}>info@creativesoftware.com.bd</p>
          <p style={{ color: "rgb(101, 101, 101)" }}>
            Last updated: October 25th, 2023
          </p>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;
