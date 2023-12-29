

export interface Post {
    userId: number;    
    id: number;
    titulo: string;
    autor: string;
    dataPostagem: Date;
    texto: string;
    podeExcluir: boolean;    
} 

export interface PostInsertRequest {
    titulo: string;
    texto: string;
    tipo: string;
}
