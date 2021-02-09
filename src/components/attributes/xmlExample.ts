export const customTheme = {
  tagColor: "Orange",
  textColor: "#FFFFFF",
  separatorColor: "Orange",
};
export const customThemeVsCode = {
  tagColor: "#03a9f4",
  attributeKeyColor: "#fdd835",
  textColor: "#FFFFFF",
  attributeValueColor: "#8bc34a",
  separatorColor: "#03a9f4",
};
export const options = { indent: 2, newline: "\n" };
export const xmlExample = `
<xs:element name="Instructions" minOccurs="1" maxOccurs="1">
          <xs:annotation>
            <xs:documentation>Determines the scope of the message. The message can be about the Application, Valuation, Mortgage Insurance, Loan Documents or an Error.</xs:documentation>
            <xs:appinfo>
              <lx:path>Package.Instructions</lx:path>
              <lx:label>Instructions</lx:label>
              <li:transactions>CAL,CDA,DAS,CNZ,SVC,LMI,VAL,ACC</li:transactions>
            </xs:appinfo>
          </xs:annotation>
          <xs:complexType>
            <xs:choice>
              <xs:element name="AccountCreationInstructions" minOccurs="1" maxOccurs="1">
                <xs:annotation>
                  <xs:documentation>Loan account creation submission information or loan account creation status updates.</xs:documentation>
                  <xs:appinfo>
                    <lx:path>Package.Instructions.AccountCreationInstructions</lx:path>
                    <lx:label>Account Creation Instructions</lx:label>
                    <li:transactions>ACC</li:transactions>
                  </xs:appinfo>
                </xs:annotation>
                <xs:complexType>
                  <xs:choice>
                    <xs:element name="Submit" minOccurs="1" maxOccurs="1">
                      <xs:annotation>
                        <xs:documentation>Loan account creation submission information.</xs:documentation>
                        <xs:appinfo>
                          <lx:path>Package.Instructions.AccountCreationInstructions.Submit</lx:path>
                          <lx:label>Submit</lx:label>
                          <li:transactions>ACC</li:transactions>
                        </xs:appinfo>
                      </xs:annotation>
                      <xs:complexType>
                        <xs:attribute name="IsAccountVariation" type="yesNoList" use="optional">
                          <xs:annotation>
                            <xs:documentation>Flag to indicate whether the application being submitted is an account variation.</xs:documentation>
                            <xs:appinfo>
                              <lx:path>Package.Instructions.AccountCreationInstructions.Submit.IsAccountVariation</lx:path>
                              <lx:label>Is Account Variation</lx:label>
                              <li:transactions>ACC</li:transactions>
                            </xs:appinfo>
                          </xs:annotation>
                        </xs:attribute>
                        <xs:attribute name="IsResubmission" type="yesNoList" use="optional">
                          <xs:annotation>
                            <xs:documentation>Flag to indicate whether the application being submitted is a resubmission.</xs:documentation>
                            <xs:appinfo>
                              <lx:path>Package.Instructions.AccountCreationInstructions.Submit.IsResubmission</lx:path>
                              <lx:label>Is Resubmission</lx:label>
                              <li:transactions>ACC</li:transactions>
                            </xs:appinfo>
                          </xs:annotation>
                        </xs:attribute>
                      </xs:complexType>
                    </xs:element>
                    <xs:element name="Update" minOccurs="1" maxOccurs="1">
                      <xs:annotation>
                        <xs:documentation>Application status or events information.</xs:documentation>
                        <xs:appinfo>
                          <lx:path>Package.Instructions.AccountCreationInstructions.Update</lx:path>
                          <lx:label>Update</lx:label>
                          <li:transactions>ACC</li:transactions>
                        </xs:appinfo>
                      </xs:annotation>
                      <xs:complexType>
                        <xs:sequence>
                          <xs:element name="Event" minOccurs="0" maxOccurs="unbounded">
                            <xs:annotation>
                              <xs:documentation>An event that occurs during the loan account creation process.</xs:documentation>
                              <xs:appinfo>
                                <lx:path>Package.Instructions.AccountCreationInstructions.Update.Event</lx:path>
                                <lx:label>Event</lx:label>
                                <li:transactions>ACC</li:transactions>
                              </xs:appinfo>
                            </xs:annotation>
                            <xs:complexType>
                              <xs:attribute name="DateTime" type="dateTimeType" use="optional">
                                <xs:annotation>
                                  <xs:documentation>The date and time at which the event is specified as having occurred.</xs:documentation>
                                  <xs:appinfo>
                                    <lx:path>Package.Instructions.AccountCreationInstructions.Update.Event.DateTime</lx:path>
                                    <lx:label>Date Time</lx:label>
                                    <li:transactions>ACC</li:transactions>
                                  </xs:appinfo>
                                </xs:annotation>
                              </xs:attribute>
                              <xs:attribute name="Details" type="stringType" use="optional">
                                <xs:annotation>
                                  <xs:documentation>A free-text field to provide event specific details.</xs:documentation>
                                  <xs:appinfo>
                                    <lx:path>Package.Instructions.AccountCreationInstructions.Update.Event.Details</lx:path>
                                    <lx:label>Details</lx:label>
                                    <li:transactions>ACC</li:transactions>
                                  </xs:appinfo>
                                </xs:annotation>
                              </xs:attribute>
                              <xs:attribute name="Name" type="eventNameAccountCreationInstructionsList" use="required">
                                <xs:annotation>
                                  <xs:documentation>The standardised name for the event that has occurred during loan account creation processing.</xs:documentation>
                                  <xs:appinfo>
                                    <lx:path>Package.Instructions.AccountCreationInstructions.Update.Event.Name</lx:path>
                                    <lx:label>Name</lx:label>
                                    <li:transactions>ACC</li:transactions>
                                  </xs:appinfo>
                                </xs:annotation>
                              </xs:attribute>
                              <xs:attribute name="UniqueID" type="uniqueIDType" use="optional">
                                <xs:annotation>
                                  <xs:documentation>System assigned unique identifier.</xs:documentation>
                                  <xs:appinfo>
                                    <lx:path>Package.Instructions.AccountCreationInstructions.Update.Event.UniqueID</lx:path>
                                    <lx:label>Unique ID</lx:label>
                                    <li:transactions>ACC</li:transactions>
                                  </xs:appinfo>
                                </xs:annotation>
                              </xs:attribute>
                            </xs:complexType>
                          </xs:element>
                          <xs:element name="Status" minOccurs="0" maxOccurs="1">
                            <xs:annotation>
                              <xs:documentation>The status that the application has achieved in the application workflow.</xs:documentation>
                              <xs:appinfo>
                                <lx:path>Package.Instructions.AccountCreationInstructions.Update.Status</lx:path>
                                <lx:label>Status</lx:label>
                                <li:transactions>ACC</li:transactions>
                              </xs:appinfo>
                            </xs:annotation>
                            <xs:complexType>
                              <xs:attribute name="DateTime" type="dateTimeType" use="optional">
                                <xs:annotation>
                                  <xs:documentation>The date and time at which the application achieved the status.</xs:documentation>
                                  <xs:appinfo>
                                    <lx:path>Package.Instructions.AccountCreationInstructions.Update.Status.DateTime</lx:path>
                                    <lx:label>Date Time</lx:label>
                                    <li:transactions>ACC</li:transactions>
                                  </xs:appinfo>
                                </xs:annotation>
                              </xs:attribute>
                              <xs:attribute name="Details" type="stringType" use="optional">
                                <xs:annotation>
                                  <xs:documentation>A free-text field for providing details about the status, such as comments.</xs:documentation>
                                  <xs:appinfo>
                                    <lx:path>Package.Instructions.AccountCreationInstructions.Update.Status.Details</lx:path>
                                    <lx:label>Details</lx:label>
                                    <li:transactions>ACC</li:transactions>
                                  </xs:appinfo>
                                </xs:annotation>
                              </xs:attribute>
                              <xs:attribute name="Name" type="statusNameAccountCreationInstructionsList" use="required">
                                <xs:annotation>
                                  <xs:documentation>The status of the application.</xs:documentation>
                                  <xs:appinfo>
                                    <lx:path>Package.Instructions.AccountCreationInstructions.Update.Status.Name</lx:path>
                                    <lx:label>Name</lx:label>
                                    <li:transactions>ACC</li:transactions>
                                  </xs:appinfo>
                                </xs:annotation>
                              </xs:attribute>
                            </xs:complexType>
                          </xs:element>
                        </xs:sequence>
                      </xs:complexType>
                    </xs:element>
                  </xs:choice>
                </xs:complexType>
              </xs:element>
`;
