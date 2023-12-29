

export interface Post {
    userId: number;    
    id: number;
    titulo: string;
    autor: string;
    datapostagem: string;
    texto: string;
    tipo: string;
    podeExcluir: boolean;    
} 

export interface PostInsertRequest {
    titulo: string;
    texto: string;
    tipo: string;
}
