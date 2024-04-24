from lxml import etree

xml_file = "D:\sdl/ass3/user.xml"     #here put the path very carefullly, error can occur here only. look at those backslash and forwardslash
xsd_file = "D:\sdl/ass3/user_schema.xsd"   #here also

schema_doc = etree.parse(xsd_file)
schema = etree.XMLSchema(schema_doc)

xml_doc = etree.parse(xml_file)

if schema.validate(xml_doc):
    print("XML is valid against the schema.")

else:
    print("XML is not valid against the schema.") 
