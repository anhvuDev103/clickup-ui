export interface CreateProjectRequest {
  name: string;
  description?: string;
  is_private: boolean;
  member_emails: string[];
}
