import { defineObject, FieldType } from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

export const KNOWLEDGE_ARTICLE_OBJECT_ID = OBJECTS.knowledgeArticle.id;

export default defineObject({
  universalIdentifier: KNOWLEDGE_ARTICLE_OBJECT_ID,
  nameSingular: 'ndgKnowledgeArticle',
  namePlural: 'ndgKnowledgeArticles',
  labelSingular: 'Knowledge Article',
  labelPlural: 'Knowledge Articles',
  description: 'Internal knowledge base articles',
  icon: 'IconBook',
  labelIdentifierFieldMetadataUniversalIdentifier:
    OBJECTS.knowledgeArticle.fields.title,
  fields: [
    {
      universalIdentifier: OBJECTS.knowledgeArticle.fields.content,
      name: 'articleContent',
      type: FieldType.RICH_TEXT,
      label: 'Content',
      icon: 'IconFileText',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.knowledgeArticle.fields.category,
      name: 'articleCategory',
      type: FieldType.SELECT,
      label: 'Category',
      icon: 'IconCategory',
      options: [
        {
          value: 'NEURODIVERSITY',
          label: 'Neurodiversity',
          position: 0,
          color: 'blue',
        },
        {
          value: 'PROCESS',
          label: 'Process',
          position: 1,
          color: 'green',
        },
        {
          value: 'SALES',
          label: 'Sales',
          position: 2,
          color: 'purple',
        },
        {
          value: 'DELIVERY',
          label: 'Delivery',
          position: 3,
          color: 'orange',
        },
        {
          value: 'GENERAL',
          label: 'General',
          position: 4,
          color: 'gray',
        },
      ],
    },
    {
      universalIdentifier: OBJECTS.knowledgeArticle.fields.articleTags,
      name: 'articleTags',
      type: FieldType.ARRAY,
      label: 'Tags',
      icon: 'IconTag',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.knowledgeArticle.fields.isPublished,
      name: 'isPublished',
      type: FieldType.BOOLEAN,
      label: 'Published',
      icon: 'IconWorld',
      defaultValue: false,
    },
  ],
});
