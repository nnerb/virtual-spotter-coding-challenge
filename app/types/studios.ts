export interface Studio {
  id: number; // Unique identifier for the studio
  uuid: string; // Universally unique identifier for the studio
  business_type: string; // Type of business, e.g., gym
  franchise_id: number | null; // Franchise ID, or null if not applicable
  name: string; // Studio name
  address: string; // Studio address/location
  time_zone: string | null; // Time zone, can be null if not specified
  country: string | null; // Country name, can be null if not specified
  country_code: string | null; // ISO country code, can be null if not specified
  currency_symbol: string | null; // Currency symbol, can be null if not specified
  currency_text: string | null; // Text representation of the currency, can be null
  logo: string; // Path to the studio's logo image
  logo_url: string; // URL of the studio's logo image
  country_id: number; // Country ID (from another data source, likely)
  status: number; // Status of the studio, 0 and 1 or 1 and 2; further assumptions needed
  owner_id: number; // User ID of the owner of the studio
  primary_contact_user_id: number; // User ID of the primary contact for the studio
  plan_id: number; // Plan ID associated with the studio
  updated_discount_code: string | null; // Updated discount code, or null if not available
  subs_expired: boolean | null; // Boolean indicating if the subscription is expired, can be null
  restricted_access: boolean | null; // Boolean indicating if access is restricted, can be null
  next_due_date: string | null; // Next subscription due date in string format, can be null
  has_mb_account: boolean | null; // Boolean indicating if the studio has a MindBody account, can be null
  is_mb_skipped: boolean | null; // Boolean indicating if MindBody account setup is skipped, can be null
  mb_account_type: string | null; // Type of the MindBody account, can be null if not specified
  cron_status: number; // Cron job status, assumed to be 0 or 1
  cron_last_updated: string | null; // Last update time of the cron job, can be null if not updated
  deleted_at: string | null; // Timestamp when the studio was deleted, null if not deleted
  deleted_by: number | null; // User ID of the person who deleted the studio, null if not deleted
  created_at: string; // Timestamp when the studio was created
  updated_at: string; // Timestamp when the studio was last updated
  created_by: number; // User ID of the person who created the studio
}
