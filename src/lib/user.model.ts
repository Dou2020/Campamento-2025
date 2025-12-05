// /home/dou13/Documentos/CAMPA2025/src/lib/user.model.ts

export interface NotionNumber {
    id: string;
    type: 'number';
    number: number | null;
}

export interface NotionStatus {
    id: string;
    type: 'status';
    status: {
        id?: string;
        name?: string;
        color?: string;
    } | null;
}

export interface NotionCreatedTime {
    id: string;
    type: 'created_time';
    created_time: string; // ISO date string
}

export interface NotionLastEditedTime {
    id: string;
    type: 'last_edited_time';
    last_edited_time: string; // ISO date string
}

export interface NotionSelect {
    id: string;
    type: 'select';
    select: {
        id?: string;
        name?: string;
        color?: string;
    } | null;
}

export interface NotionFormula {
    id: string;
    type: 'formula';
    formula: {
        // Notion formula can hold different shapes; keep common fields optional
        type?: string;
        string?: string | null;
        number?: number | null;
        boolean?: boolean | null;
    } | null;
}

export interface NotionUniqueId {
    id: string;
    type: 'unique_id';
    unique_id: {
        id?: string;
        type?: string;
        // other possible fields
    } | null;
}

export interface NotionTitleItem {
    type?: string;
    plain_text?: string;
    href?: string | null;
    // text object (when present) can contain content and link
    text?: {
        content?: string;
        link?: { url: string } | null;
    };
}

export interface NotionTitle {
    id: string;
    type: 'title';
    title: NotionTitleItem[];
}

export interface User {
    Edad: NotionNumber;
    'Cabañas': NotionStatus;
    'Fecha de creación': NotionCreatedTime;
    'Última edición': NotionLastEditedTime;
    Sexo: NotionSelect;
    Pago: NotionNumber;
    Proceso: NotionFormula;
    ID: NotionUniqueId;
    Tipo: NotionStatus;
    Nombre: NotionTitle;
}

export type Users = User[];