export interface StudioPerformance {
  id: number; // Unique identifier for the performance data entry
  studio_id: number; // Studio associated with this performance data
  start_date: string; // Start date of the performance period (format: YYYY-MM-DD)
  end_date: string; // End date of the performance period (format: YYYY-MM-DD)
  filter_type: string; // Type of filter applied (e.g., "weekly")
  campaign_type: string; // Type of campaign associated with the data
  cpl: number; // Cost per lead (CPL)
  fb_budget: number; // Budget allocated for Facebook ads
  google_budget: number | null; // Budget allocated for Google ads (can be null)
  cac_value: number | null; // Customer acquisition cost (CAC) value (can be null)
  fb_ad_lead: number; // Leads from Facebook ads
  non_fb_ad_lead: number; // Leads from non-Facebook ads
  no_intro_sale: number; // Number of introductory sales
  rollover_mem_sold: number; // Number of rollover memberships sold
  weekly_cancel: number; // Number of weekly cancellations
  attendance: number; // Attendance count
  seven_day_revenue: string; // Revenue generated in the last 7 days (string type)
  average_members: string; // Average number of members during the period (string type)
  paused_members: string; // Number of paused memberships during the period (string type)
  lead_details: string | null; // Additional details about the leads (can be null)
  status: number; // Status of the performance data entry (1 for active, 0 for inactive, etc.)
  created_by: number; // ID of the user who created this record
  updated_by: number | null; // ID of the user who last updated this record (can be null)
  deleted_by: number | null; // ID of the user who deleted this record (can be null)
  created_at: string; // Creation timestamp of the record (format: YYYY-MM-DD HH:MM:SS)
  updated_at: string; // Last update timestamp of the record (format: YYYY-MM-DD HH:MM:SS)
  deleted_at: string | null; // Deletion timestamp (can be null if not deleted)
}
