export interface OpcaoMultiplaEscolha {
  id: number;
  opcao: string;
  significado?: string;
  correta?: boolean;
}

export enum StatusCorrespondencia {
  ESPERANDO_LIGACAO_RIGHT = 'ESPERANDO_LIGACAO_RIGHT',
  LIGADO_RIGHT = 'LIGADO_RIGHT',
  NEUTRO = 'NEUTRO',
  NAO_SABE = 'NAO_SABE',
}

export interface OpcaoCorrespondencia {
  id: number;
  texto: string;
  disabled?: boolean;
  selected?: boolean;
  ligadoId?: number;
  status?: StatusCorrespondencia;
  corretoIdCorrelacao?: number;
  color?: string;
  indice?: { letra: string; numero: number };
}

export interface PerguntaMultiplaEscolha {
  id: number;
  tipo: 'MULTIPLA_ESCOLHA';
  pergunta: string;
  selecionadoId?: number;
  corretaId: number;
  opcoes: OpcaoMultiplaEscolha[];
  color?: string;
}

export interface PerguntaCorrespondencia {
  id: number;
  tipo: 'CORRESPONDENCIA';
  pergunta: string;
  opcoesEsquerda: OpcaoCorrespondencia[];
  opcoesDireita: OpcaoCorrespondencia[];
}

export interface SubTema {
  id: number;
  tema: string;
  perguntas: (PerguntaMultiplaEscolha | PerguntaCorrespondencia)[];
}

export interface Tema {
  id: number;
  temaGeral?: string;
  subTema: SubTema[];
}


export const temas: TemaGeral[] | undefined = [
  {
    id: 1,
    temaGeral: '1. Língua e linguagem. Variações linguísticas.',
    subTemas: [
      { id: 1, tema: 'Língua e linguagem.' },
      { id: 2, tema: 'Variações linguísticas.' },
    ],
    disabled: true,
  },
  {
    id: 2,
    temaGeral: '2. Fonética. Ortografia. Acentuação gráfica.',
    disabled: false,
    subTemas: [
      { id: 1, tema: 'Fonética.' },
      { id: 2, tema: 'Ortografia.', disabled: true },
      { id: 2, tema: 'Acentuação gráfica.', disabled: true },
    ],
  },
  {
    id: 3,
    temaGeral:
      '3. Denotação e conotação. Sinonímia e antonímia. Paronímia e homonímia. Ambiguidade',
    subTemas: [
      { id: 1, tema: 'Denotação e conotação.', disabled: false },
      { id: 2, tema: 'Sinonímia e antonímia.', disabled: false },
      { id: 3, tema: 'Paronímia e homonímia.', disabled: false },
      { id: 4, tema: 'Ambiguidade.', disabled: true },
    ],
    disabled: false,
  },
  {
    id: 4,
    temaGeral:
      '4. Compreensão e interpretação de textos. Gêneros e tipologias textuais. Coesão e coerência. Pressupostos e subentendidos. Funções da linguagem. Intertextualidade.',
    disabled: true,
  },
  {
    id: 5,
    temaGeral:
      '5. Argumentação. Recursos argumentativos. Falácias da argumentação.',
    disabled: true,
  },
  {
    id: 6,
    temaGeral: '6. Estrutura e formação de palavras.',
    disabled: true,
  },
  {
    id: 7,
    temaGeral: '7. Classes de palavras.',
    subTemas: [{ id: 1, tema: 'Estrutura', disabled: false }],
    disabled: false,
  },
  {
    id: 8,
    temaGeral:
      '8. Frase, oração e período. Período simples. Período composto por coordenação. Período composto por subordinação.',
    disabled: true,
  },
  {
    id: 9,
    temaGeral: '9. Concordância verbal e nominal.',
    disabled: true,
  },
  {
    id: 10,
    temaGeral: '10. Regência verbal e nominal. Crase.',
    disabled: true,
  },
  {
    id: 11,
    temaGeral: '11. Colocação pronominal.',
    disabled: true,
  },
  {
    id: 12,
    temaGeral: '12. Sinais de pontuação.',
    disabled: true,
  },
  {
    id: 13,
    temaGeral: '13. Figuras de linguagem.',
    disabled: true,
  },
  {
    id: 14,
    temaGeral: '14. Discurso direto, indireto e indireto livre.',
    disabled: true,
  },
];
