import { useState } from "react";
import { Star } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { apiRequest } from "@/lib/queryClient";

type FormState = {
  authorName: string;
  authorMeta: string;
  content: string;
  rating: number;
};

const INITIAL: FormState = { authorName: "", authorMeta: "", content: "", rating: 5 };

export default function SubmitReview() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [hovered, setHovered] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (field: keyof FormState, value: string | number) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.authorName.trim()) {
      setError("Por favor, informe seu nome.");
      return;
    }
    if (form.content.trim().length < 10) {
      setError("O texto do review deve ter pelo menos 10 caracteres.");
      return;
    }

    setSubmitting(true);
    try {
      await apiRequest("POST", "/api/reviews/submit", {
        authorName: form.authorName.trim(),
        authorMeta: form.authorMeta.trim() || undefined,
        content: form.content.trim(),
        rating: form.rating,
        sourceLabel: "Site",
      });
      setSubmitted(true);
    } catch (err: any) {
      setError(err?.message || "Erro ao enviar review. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <Star className="w-8 h-8 fill-green-500 text-green-500" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Obrigado pelo seu review!</h1>
          <p className="text-slate-600">
            Seu review foi enviado e será publicado após aprovação.
          </p>
          <Link href="/">
            <Button className="rounded-full mt-2">Voltar ao início</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] py-16 px-4">
      <div className="max-w-xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-slate-800">Deixe seu review</h1>
          <p className="text-slate-600">Sua opinião nos ajuda a melhorar e ajuda outros clientes.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-6">
          {/* Star rating */}
          <div className="space-y-2">
            <Label>Avaliação</Label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => set("rating", star)}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(0)}
                  className="p-0.5 focus:outline-none"
                  aria-label={`${star} estrelas`}
                >
                  <Star
                    className={`w-8 h-8 transition-colors ${
                      star <= (hovered || form.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "fill-slate-200 text-slate-200"
                    }`}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm text-slate-500">
                {form.rating === 5 ? "Excelente" : form.rating === 4 ? "Ótimo" : form.rating === 3 ? "Bom" : form.rating === 2 ? "Regular" : "Ruim"}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="authorName">Seu nome *</Label>
            <Input
              id="authorName"
              value={form.authorName}
              onChange={(e) => set("authorName", e.target.value)}
              placeholder="João Silva"
              maxLength={120}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="authorMeta">
              Cidade / Descrição <span className="text-slate-400 font-normal">(opcional)</span>
            </Label>
            <Input
              id="authorMeta"
              value={form.authorMeta}
              onChange={(e) => set("authorMeta", e.target.value)}
              placeholder="São Paulo, SP"
              maxLength={160}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Review *</Label>
            <Textarea
              id="content"
              value={form.content}
              onChange={(e) => set("content", e.target.value)}
              placeholder="Conte sobre sua experiência com nosso serviço..."
              className="min-h-[120px]"
              maxLength={1200}
            />
            <p className="text-xs text-slate-400 text-right">{form.content.length}/1200</p>
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <Button type="submit" disabled={submitting} className="w-full rounded-full">
            {submitting ? "Enviando..." : "Enviar review"}
          </Button>
        </form>
      </div>
    </div>
  );
}
